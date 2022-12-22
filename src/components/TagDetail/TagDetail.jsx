import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_TAG } from '../../graphql/queries/tag'
import "./TagDetail.css"
import { styled } from '@mui/system'
import Image from 'mui-image'
import { Typography, Grid, Dialog, IconButton } from '@mui/material'
import { Html } from '@react-three/drei'
import { useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Container = styled('div')(({ theme }) => ({
    width: "clamp(300px, 80vw, 800px)",
    height: "70vh",
    scrollSnapType: "x mandatory",
    overflowX: "scroll",
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
    overflowX: "scroll",
}))

const TagDetail = ({ isOpen, setIsOpen, tag }) => {
    const { loading, error, data } = useQuery(GET_TAG, {
        variables: {
            id: tag
        }
    })
    const navigate = useNavigate()
    const theme = useTheme()

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
            return image.attributes.file.data[0].attributes.url
        })
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
        if (!data) return []
        if (!data.tag.data) return []
        return data.tag.data.attributes.name
    }, [data])

    const handleOnClose = () => {
        setIsOpen(false)
    }


    const closeButton = <IconButton
        aria-label="close"
        onClick={handleOnClose}
        sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: theme.palette.background.default,
            backgroundColor: theme.palette.primary.main,
            padding: "4px",
            borderRadius: "5px",
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
            },

        }}
    >
        <CloseIcon />
    </IconButton>

    return (
        <Html as='div'>
            <Dialog open={isOpen} maxWidth="auto" sx={{ maxHeight: "auto", position: 'relative' }}>
                {closeButton}
                <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: "#E9EFF2" }} paddingTop={4}>
                    <Typography variant="h2" component="h1" fontWeight={800} color={theme.palette.text.primary}>{name}</Typography>
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
                                <div class="container">
                                    <iframe className='video' width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        </Html>
    )
}

export default TagDetail