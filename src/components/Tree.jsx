import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import { usePrevious } from '../hooks'
import useMeasure from 'react-use-measure'
import * as Icons from './Icons'

import { styled } from '@mui/system'
import { animated } from '@react-spring/web'

export const Frame = styled('div')(({ theme }) => ({
    position: "relative",
    padding: "4px 0px 0px 0px",
    verticalAlign: "middle",
    color: theme.palette.text.primary,
    fill: theme.palette.text.primary,
}));

export const Title = styled('span')`
  vertical-align: middle;
`

export const Content = styled(animated.div)(({ theme }) => ({
    willChange: "transform, opacity, height",
    marginLeft: "6px",
    padding: "0px 0px 0px 14px",
    borderLeft: `1px dashed ${theme.palette.divider}`,
}));

export const toggle = {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
}

const TreeText = styled('div')(({ theme }) => ({
    fontWeight: 400,
    maxWidth: "80vw",
    minWidth: "200px",
    //wrap text
    "whiteSpace": "pre-wrap",
    color: theme.palette.text.secondary,
}));


const Tree = (({ currentNode, treeData, style, defaultOpen = false }) => {

    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [ref, { height: viewHeight }] = useMeasure()
    const { height, opacity, y } = useSpring({
        from: { height: 0, opacity: 0, y: 0 },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
        },
    })

    const Icon = Icons[`${(currentNode.attributes.concepts.data.length > 0 || currentNode.attributes.definitions.data.length > 0) > 0 ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

    const toggleOpen = () => setOpen(!isOpen)
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: (currentNode.attributes.concepts.data.length > 0 || currentNode.attributes.definitions.data.length > 0) ? 1 : 0.3 }} onClick={toggleOpen} />
            <Title style={style}>{currentNode.attributes.name}</Title>
            <Content
                style={{
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height,
                }}>
                <a.div ref={ref} style={{ y }}>
                    {currentNode.attributes.definitions.data.map((definition) => {
                        return (
                            <TreeText key={definition.id}>
                                {definition.attributes.content}
                            </TreeText>
                        )
                    })}
                    {currentNode.attributes.concepts.data.map((concept) => {
                        return (
                            <Tree key={concept.id} currentNode={treeData[Number(concept.id) - 1]} treeData={treeData} />
                        )
                    })}
                </a.div>

            </Content>
        </Frame>
    )
})

export default Tree
