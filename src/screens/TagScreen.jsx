import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_TAG } from '../graphql/queries/tag'

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
        <>
        </>
    )
}

export default TagScreen