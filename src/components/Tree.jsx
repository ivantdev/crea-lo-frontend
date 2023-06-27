import React, { useState, useMemo } from 'react'
import { useSpring, a } from '@react-spring/web'
import { usePrevious } from '../hooks'
import useMeasure from 'react-use-measure'
import * as Icons from './Icons'
import { styled } from '@mui/system'
import { animated } from '@react-spring/web'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import CloseIcon from '@mui/icons-material/Close'
import QueueIcon from '@mui/icons-material/Queue';
import MuiDialogContent from '@mui/material/DialogContent'
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
    fontSize: "clamp(16px, 5vw, 1.2rem)",
    verticalAlign: "middle",

}));

export const Content = styled(animated.div)(({ theme }) => ({
    willChange: "transform, opacity, height",
    marginLeft: "25px",
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
    fontSize: "clamp(16px, 5vw, 1.2rem)",
    //wrap text
    "whiteSpace": "pre-wrap",
    color: theme.palette.text.primary,
}));

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
    borderTop: "none"
}));

const Tree = (({ currentNode, treeData, style, defaultOpen = false }) => {

    const STATIC = import.meta.env.VITE_STATIC

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
        handleAddConcept();
        handleAddDefinition();
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
                    {definition.attributes.content}
                </TreeText>
            )
        })
    }, [treeData])

    const conceptElements = useMemo(() => {
        return currentNode.attributes.concepts.data.map((concept) => {
            return (
                <Tree key={concept.id} defaultOpen={true} currentNode={treeData[concept.id]} treeData={treeData} />
            )
        })
    }, [treeData])


    const handleOnClose = () => {
        setModalOpen(false)
    }
    const closeButton = <IconButton
        aria-label="close"
        onClick={handleOnClose}
        sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            padding: "2px",
            borderRadius: "5px",
            color: theme.palette.background.default,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
            },
        }}
    >
        <CloseIcon />
    </IconButton>


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
            {
                STATIC !== "1" &&
                <IconButton size="small" color="primary" aria-label="edit" component="span" style={{ marginLeft: "10px" }} onClick={toggleModalOpen}>
                    <EditIcon style={{ fill: theme.palette.text.primary }} />
                </IconButton>
            }
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
                // repositionOnUpdate={false}
                style={{ padding: '0px 0px 0px 0px' }}
                sx={{
                    p: 10,
                }}
            >
                {closeButton}
                <DialogTitle id="modal-modal-title" variant="h3" component="h2" sx={{ fontWeight: 700, pt: 5, px: 5 }} >
                    {currentNode.attributes.name}
                </DialogTitle>

                <DialogContent dividers sx={{ pb: 5, px: 5 }}>
                    <Grid container spacing={4} mt={1}>
                        <Grid item xs={12}>
                            <Typography mt={1} variant="h5" component="h3" sx={{ fontWeight: 700 }} >
                                Definiciones
                            </Typography>
                        </Grid>

                        {currentNode.attributes.definitions.data.map((definition, index) => {
                            return (
                                <Grid item xs={12} sm={6} key={definition.id} container sx={{ position: 'relative', pt: 0 }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            key={definition.id}
                                            id={'textField' + definition.id}
                                            multiline
                                            rows={3}
                                            defaultValue={definition.attributes.content}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={2} sx={{ position: 'absolute', right: 2, bottom: -30, zIndex: 100 }}>
                                        <IconButton size="small" color="error" component="span" style={{ marginLeft: "10px" }} onClick={() => handleDeleteDefinition(definition.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            )
                        })}
                        <Grid item xs={12} sx={{ position: 'relative' }}>
                            <TextField
                                id='newDefinition'
                                multiline
                                rows={3}
                                variant="outlined"
                                placeholder='Agrega una nueva definición aquí'
                                fullWidth
                                sx={{ backgroundColor: "white" }}
                            />
                            <IconButton size="small" color="primary" component="span" style={{ position: 'absolute', right: 0, bottom: -35 }} onClick={handleAddDefinition}>
                                <QueueIcon />
                            </IconButton>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12}>
                            <Typography mt={1} variant="h5" component="h3" sx={{ fontWeight: 700 }} >
                                Conceptos
                            </Typography>
                        </Grid>

                        {currentNode.attributes.concepts.data.map((concept, index) => {
                            return (
                                <Grid item xs={12} key={concept.id} container alignItems="center">
                                    <Grid item xs={10}>
                                        <Typography sx={{ marginLeft: 2 }} fontWeight={600}>
                                            {treeData[concept.id].attributes.name}
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
                        <Grid item xs={12} sx={{ position: 'relative' }}>
                            <TextField
                                id='newConcept'
                                variant="outlined"
                                placeholder='Agrega un nuevo concepto aquí'
                                fullWidth
                                sx={{
                                    backgroundColor: 'white'
                                }}
                            />
                            <IconButton size="small" color="primary" component="span" style={{ position: 'absolute', right: -4, bottom: -35 }} onClick={handleAddConcept}>
                                <QueueIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container mt={9} >
                        <Grid item xs sx={{ display: 'flex' }} justifyContent="center">
                            <Button variant="contained" onClick={handleSaveDefinitions}>
                                Publicar
                            </Button>
                        </Grid>

                    </Grid>

                </DialogContent>
            </Dialog>
        </Frame>
    )
})

export default Tree
