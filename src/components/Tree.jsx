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

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
`

export const toggle = {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
}


const Tree = (({ children, name, style, defaultOpen = false }) => {

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

    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

    const toggleOpen = () => setOpen(!isOpen)
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={toggleOpen} />
            <Title style={style}>{name}</Title>
            <Content
                style={{
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height,
                }}>
                <a.div ref={ref} style={{ y }} children={children} />
            </Content>
        </Frame>
    )
})

export default Tree
