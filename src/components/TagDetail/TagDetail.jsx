import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_TAG } from '../../graphql/queries/tag'
import "./TagDetail.css"
import { styled } from '@mui/system'
import Image from 'mui-image'
import { Typography, Grid, Dialog, IconButton } from '@mui/material'
import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { emitCustomEvent, useCustomEventListener } from 'react-custom-events'
import * as THREE from 'three'
import { useStaticFetch } from '../../hooks/useStaticFetch'

const Container = styled('div')(({ theme }) => ({
    width: "clamp(300px, 80vw, 800px)",
    height: "70vh",
    scrollSnapType: "x mandatory",
    overflowY: "hidden",
    display: "flex",
    backgroundColor: "#E9EFF2",
    // media queries
    '@media (max-width: 375px)': {
        width: "clamp(280px, 5vw, 300px)",
    }
}))

const Section = styled('section')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxHeight: "100%",
    scrollSnapAlign: "start",
    flex: "none",
    overflowX: "scroll"
}))

const TagDetail = ({ isOpen, setIsOpen, tag }) => {
    const STATIC = import.meta.env.VITE_STATIC
    const { loading, error, data } = STATIC === "1" ? useStaticFetch(`/api/tags/${tag}.json`) : useQuery(GET_TAG, {
        variables: {
            id: tag
        }
    })
    const navigate = useNavigate()
    const theme = useTheme()
    const { gl } = useThree()

    useEffect(() => {
        if (!loading) {
            if (!data.tag.data) {
                navigate('/not-found')
                return
            }
        }
    }, [data])

    const images = useMemo(() => {
        if (loading) return []
        if (!data) return []
        if (!data.tag.data) return []
        return data.tag.data.attributes.images.data.map(image => {
            return image.attributes.file.data.map(file => {
                return file.attributes.url
        })}).flat()

    }, [data])

    const videos = useMemo(() => {
        if (loading) return []
        if (!data) return []
        if (!data.tag.data) return []
        return data.tag.data.attributes.videos.data.map(video => {
            return video.attributes.link
        })
    }, [data])

    const creations = useMemo(() => {
        if (!data) return []
        return data.tag.data.attributes.creations.data
    }, [data])

    const name = useMemo(() => {
        if (!data) return []
        if (!data.tag.data) return []
        return data.tag.data.attributes.name
    }, [data])

    const next = useMemo(() => {
        if (!data) return []
        if (!data.tag.data) return []
        return data.tag.data.attributes.next.data.id
    }, [data])

    const previous = useMemo(() => {
        if (!data) return []
        if (!data.tag.data) return []
        return data.tag.data.attributes.previous.data.id
    }, [data])


    const handleOnClose = () => {
        setIsOpen(false)
        emitCustomEvent('closeDialog')
    }

    const handleOnChangeTag = (id) => {
        setIsOpen(false)
        emitCustomEvent('changeTag', { id })
    }

    useCustomEventListener('changeTag', (e) => {
        if (tag != e.id) return
        setTimeout(() => {
            setIsOpen(true)
        }, 200);
    })

    useCustomEventListener('closeAllDialog', (e) => {
        setIsOpen(false)
    })

    if (isOpen) {
      console.log(tag)
    }


    const buttonStyles = {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.text.primary,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    }

    const closeButton = <IconButton
        aria-label="close"
        onClick={handleOnClose}
        sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            padding: "4px",
            borderRadius: "5px",
            ...buttonStyles
        }}
    >
        <CloseIcon />
    </IconButton>


    const leftArrowButton = <IconButton
        aria-label="left"
        onClick={() => handleOnChangeTag(previous)}
        sx={{ ...buttonStyles, padding: "1px", borderRadius: "3px" }}
    >
        <KeyboardDoubleArrowLeftIcon />
    </IconButton>

    const rightArrowButton = <IconButton
        aria-label="right"
        onClick={() => handleOnChangeTag(next)}
        sx={{ ...buttonStyles, padding: "1px", borderRadius: "3px" }}
    >
        <KeyboardDoubleArrowRightIcon />
    </IconButton>

    return (
        <Html as='div' >
            <Dialog open={isOpen} maxWidth="auto" sx={{ height: "100vh", position: 'relative' }} hideBackdrop>
                {closeButton}
                <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: "#E9EFF2" }} paddingTop={4}>
                    <Grid item xs sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative", top: "7px" }}>
                        {leftArrowButton}
                    </Grid>
                    <Grid item xs sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: "1rem" }}>
                        <Typography sx={{ whiteSpace: 'nowrap' }} variant="h2" component="h1" fontWeight={800} color={theme.palette.text.primary}>{name}</Typography>
                    </Grid>
                    <Grid item xs sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", top: "7px" }}>
                        {rightArrowButton}
                    </Grid>
                </Grid>
                <Container>
                    {images.map((image, index) => {
                        return (
                            <Section key={index}>
                                <Image src={image} width="clamp(200px, 70vw, 650px)" />
                            </Section>
                        )
                    })}
                    {videos.map((video, index) => {
                        return (
                            <Section key={index}>
                                <div className="container">
                                    <iframe className='video' width="560" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Section>
                        )
                    })}
                    {creations.map((creation, index) => {
                        return (
                            <Section key={index} sx={{
                                padding: "clamp(20px, 10vw, 175px)",
                                paddingTop: "clamp(20px, 3vw, 20px)",
                                justifyContent: "flex-start",
                                alignItems: "flex-start"
                            }}>
                                <Typography variant="h4" component="h2" fontWeight={600} color={theme.palette.text.primary}>{creation.attributes.title}</Typography>
                                <Typography variant="p" mt={2}>{creation.attributes.content}</Typography>
                            </Section>
                        )
                    })}
                </Container>
            </Dialog>
        </Html >
    )
}

export default TagDetail