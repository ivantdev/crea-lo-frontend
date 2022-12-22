import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_TAG } from '../graphql/queries/tag'
import "../css/TagScreen.css"
import { styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
}))

const Section = styled('section')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
}))

const TagScreen = () => {
    const tag = useParams().tag
    const { loading, error, data } = useQuery(GET_TAG, {
        variables: {
            id: tag
        }
    })
    const navigate = useNavigate()

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
        if (!data) return []
        return data.tag.data.attributes.videos.data
    }, [data])
    const creations = useMemo(() => {
        if (!data) return []
        return data.tag.data.attributes.creations.data
    }, [data])

    return (
        <Container>
            <Section>
                <h1>Page 1</h1>
            </Section>
            <Section>
                <h1>Page 2</h1>
            </Section>
            <Section>
                <h1>Page 3</h1>
            </Section>
        </Container>
    )
}

export default TagScreen