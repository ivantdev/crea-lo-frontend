import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import { usePrevious } from '../hooks'
import useMeasure from 'react-use-measure'
import * as Icons from './Icons'
import { styled } from '@mui/system'
import { animated } from '@react-spring/web'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { useMutation } from '@apollo/client'
import { UPDATE_DEFINITION } from '../graphql/mutations/definition'

export const Frame = styled('div')(({ theme }) => ({
    position: "relative",
    padding: "4px 0px 0px 0px",
    verticalAlign: "middle",
    color: theme.palette.text.primary,
    fill: theme.palette.text.primary,
}));

export const Title = styled('span')(({ theme }) => ({
    fontWeight: 600,
    verticalAlign: "middle",
    color: theme.palette.fragments.contrastText,
}));

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
    color: theme.palette.fragments.contrastText,
}));

const Tree = (({ currentNode, treeData, style, defaultOpen = false }) => {

    const [isOpen, setOpen] = useState(defaultOpen)
    const [modalOpen, setModalOpen] = useState(false)
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

    const [updateDefinition, { loading, error }] = useMutation(UPDATE_DEFINITION)

    const Icon = Icons[`${(currentNode.attributes.concepts.data.length > 0 || currentNode.attributes.definitions.data.length > 0) > 0 ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

    const toggleOpen = () => setOpen(!isOpen)

    const toggleModalOpen = () => setModalOpen(!modalOpen)

    const handleSaveDefinitions = () => {
        currentNode.attributes.definitions.data.forEach((definition) => {
            updateDefinition({
                variables: {
                    id: definition.id,
                    content: document.getElementById("textField" + definition.id).value
                }
            })
        })
        toggleModalOpen()
    }

    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: (currentNode.attributes.concepts.data.length > 0 || currentNode.attributes.definitions.data.length > 0) ? 1 : 0.3 }} onClick={toggleOpen} />
            <Title style={style}>{currentNode.attributes.name}</Title>
            <IconButton size="small" color="primary" aria-label="edit" component="span" style={{ marginLeft: "10px" }} onClick={toggleModalOpen}>
                <EditIcon />
            </IconButton>
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
                            <Tree key={concept.id} currentNode={treeData[concept.id]} treeData={treeData} />
                        )
                    })}
                </a.div>
            </Content>
            <Modal
                open={modalOpen}
                onClose={toggleModalOpen}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: "600",
                    width: "500",
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {currentNode.attributes.name}
                    </Typography>

                    <Grid container spacing={2} mt={1}>
                        {currentNode.attributes.definitions.data.length > 0 ? (
                            <Grid item xs={12}>
                                <Typography mt={1} >
                                    Definitions
                                </Typography>
                            </Grid>)
                            : null}

                        {currentNode.attributes.definitions.data.map((definition, index) => {
                            return (
                                <Grid item xs={6} key={definition.id}>
                                    <TextField
                                        key={definition.id}
                                        id={'textField' + definition.id}
                                        label={Number(index) + 1}
                                        multiline
                                        rows={3}
                                        defaultValue={definition.attributes.content}
                                        variant="outlined"
                                    />
                                </Grid>
                            )
                        })}
                        {currentNode.attributes.concepts.data.length > 0 ? (
                            <Grid item xs={12}>
                                <Typography mt={1}>
                                    Concepts
                                </Typography>
                            </Grid>
                        ) : null
                        }

                        {currentNode.attributes.concepts.data.map((concept) => {
                            return (
                                <Grid item xs={6} key={concept.id}>
                                    <Typography>
                                        {treeData[concept.id].attributes.name}
                                    </Typography>
                                    <IconButton size="small" color="danger" component="span" style={{ marginLeft: "10px" }} onClick={toggleModalOpen}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            )
                        }
                        )}

                    </Grid>
                    <Button variant="contained" color="primary" style={{ marginTop: "10px" }} onClick={handleSaveDefinitions}>
                        Save
                    </Button>
                </Box>
            </Modal>
        </Frame>
    )
})

export default Tree
