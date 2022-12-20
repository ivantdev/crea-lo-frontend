import React, { useState, useMemo } from 'react'
import { useSpring, a } from '@react-spring/web'
import { usePrevious } from '../hooks'
import useMeasure from 'react-use-measure'
import * as Icons from './Icons'
import { styled } from '@mui/system'
import { animated } from '@react-spring/web'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Button, useTheme } from '@mui/material'
import { useMutation } from '@apollo/client'
import { CREATE_DEFINITION, UPDATE_DEFINITION, DELETE_DEFINITION } from '../graphql/mutations/definition'
import { CREATE_CONCEPT, UPDATE_CONCEPT, DELETE_CONCEPT } from '../graphql/mutations/concept'

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
    color: theme.palette.text.primary,
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

    const [updateDefinition] = useMutation(UPDATE_DEFINITION)
    const [createDefinition] = useMutation(CREATE_DEFINITION)
    const [deleteDefinition] = useMutation(DELETE_DEFINITION)
    const [createConcept] = useMutation(CREATE_CONCEPT)
    const [updateConcept] = useMutation(UPDATE_CONCEPT)
    const [deleteConcept] = useMutation(DELETE_CONCEPT)

    const Icon = Icons[`${(currentNode.attributes.concepts.data.length > 0 || currentNode.attributes.definitions.data.length > 0) > 0 ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

    const toggleOpen = () => setOpen(prev => !prev)

    const toggleModalOpen = () => setModalOpen(prev => !prev)

    const theme = useTheme()

    const handleSaveDefinitions = async () => {
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

    const handleAddDefinition = async () => {
        if (document.getElementById("newDefinition").value === "") return
        const newDefinition = await createDefinition({
            variables: {
                content: document.getElementById("newDefinition").value,
                conceptId: currentNode.id
            }
        })
        updateConcept({
            variables: {
                id: currentNode.id,
                definitions: [...currentNode.attributes.definitions.data.map((definition) => definition.id), newDefinition.data.createDefinition.data.id],
                concepts: currentNode.attributes.concepts.data.map((concept) => concept.id)
            }
        })
        document.getElementById("newDefinition").value = ""
    }

    const handleDeleteDefinition = async (definitionId) => {
        deleteDefinition({
            variables: {
                id: definitionId
            }
        })
        updateConcept({
            variables: {
                id: currentNode.id,
                definitions: currentNode.attributes.definitions.data.filter((definition) => definition.id !== definitionId).map((definition) => definition.id),
                concepts: currentNode.attributes.concepts.data.map((concept) => concept.id)
            }
        })
    }

    //recursively delete concept, its subconcepts, and its definitions
    const handleDeleteConcept = (conceptId) => {
        treeData[conceptId].attributes.definitions.data.forEach((definition) => {
            deleteDefinition({
                variables: {
                    id: definition.id
                }
            })
        })
        treeData[conceptId].attributes.concepts.data.forEach((concept) => {
            handleDeleteConcept(concept.id)
        })
        deleteConcept({
            variables: {
                id: conceptId
            }
        })
        updateConcept({
            variables: {
                id: currentNode.id,
                concepts: currentNode.attributes.concepts.data.filter((concept) => concept.id !== conceptId).map((concept) => concept.id),
                definitions: currentNode.attributes.definitions.data.map((definition) => definition.id)
            }
        })
    }

    const handleAddConcept = async () => {
        if (document.getElementById("newConcept").value === "") return
        const newConcept = await createConcept({
            variables: {
                name: document.getElementById("newConcept").value,
            }
        })
        updateConcept({
            variables: {
                id: currentNode.id,
                concepts: [...currentNode.attributes.concepts.data.map((concept) => concept.id), newConcept.data.createConcept.data.id],
                definitions: currentNode.attributes.definitions.data.map((definition) => definition.id)
            }
        })
        document.getElementById("newConcept").value = ""
    }

    const definitionElements = useMemo(() => {
        return currentNode.attributes.definitions.data.map((definition, index) => {
            return (
                <TreeText key={definition.id}>
                    {index + 1}. {definition.attributes.content}
                </TreeText>
            )
        })
    }, [treeData])

    const conceptElements = useMemo(() => {
        return currentNode.attributes.concepts.data.map((concept) => {
            return (
                <Tree key={concept.id} currentNode={treeData[concept.id]} treeData={treeData} />
            )
        })
    }, [treeData])


    return (
        <Frame>
            <Icon style={{
                ...toggle,
                opacity: (currentNode.attributes.concepts.data.length > 0
                    || currentNode.attributes.definitions.data.length > 0)
                    ? 1 : 0.3,
                fill: theme.palette.primary,
            }}
                onClick={toggleOpen}

            />
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
                    {definitionElements}
                    {conceptElements}
                </a.div>
            </Content>
            <Dialog
                open={modalOpen}
                onClose={toggleModalOpen}
                aria-labelledby="modal-modal-title"
                scroll='paper'
                sx={{
                    p: 10,
                }}
            >
                <DialogTitle id="modal-modal-title" variant="h2" component="h2" sx={{ fontWeight: 700, px: 5 }}>
                    {currentNode.attributes.name}
                </DialogTitle>

                <DialogContent dividers sx={{ p: 5 }}>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12}>
                            <Typography mt={1} variant="h5" component="h3" sx={{ fontWeight: 700 }} >
                                Definitions
                            </Typography>
                        </Grid>

                        {currentNode.attributes.definitions.data.map((definition, index) => {
                            return (
                                <Grid item xs={6} key={definition.id} container sx={{ position: 'relative' }}>
                                    <Grid item xs={12}>
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
                                    <Grid item xs={2} sx={{ position: 'absolute', right: 0, top: 0 }}>
                                        <IconButton size="small" color="error" component="span" style={{ marginLeft: "10px" }} onClick={() => handleDeleteDefinition(definition.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            )
                        })}
                        <Grid item xs={12}>
                            <TextField
                                id='newDefinition'
                                label="New Definition"
                                multiline
                                rows={3}
                                variant="outlined"
                                placeholder='Add a new definition here'
                                color="success"
                                fullWidth
                            />
                        </Grid>

                    </Grid>



                    <Button variant="contained" style={{ marginTop: "10px" }} onClick={handleSaveDefinitions}>
                        Save
                    </Button>



                    <Button color="success" variant="contained" style={{ marginTop: "10px", marginLeft: "10px" }} onClick={handleAddDefinition}>
                        Add definition
                    </Button>

                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12}>
                            <Typography mt={1} variant="h5" component="h3" sx={{ fontWeight: 700 }} >
                                Concepts
                            </Typography>
                        </Grid>

                        {currentNode.attributes.concepts.data.map((concept, index) => {
                            return (
                                <Grid item xs={12} key={concept.id} container alignItems="center">
                                    <Grid item xs={10}>
                                        <Typography>
                                            {index + 1}. {treeData[concept.id].attributes.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton size="small" color="error" component="span" style={{ marginLeft: "10px" }} onClick={() => handleDeleteConcept(concept.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            )
                        }
                        )}
                    </Grid>
                    <Grid container mt={3}>
                        <Grid item xs={6}>
                            <TextField
                                id='newConcept'
                                label="New Concept"
                                variant="outlined"
                                placeholder='Add a new concept here'
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button color="success" variant="contained" style={{ marginTop: "10px", marginLeft: "10px" }} onClick={handleAddConcept}>
                                Add concept
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Frame>
    )
})

export default Tree
