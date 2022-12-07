import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTagContent } from '../api'
import { useNavigate } from 'react-router-dom'

const TagScreen = () => {
    const tag = useParams().tag
    const [tagData, setTagData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getTagContent(tag).then((data) => {
            if (data.data.data.length > 0) {
                setTagData(data.data.data[0])
                console.log(data.data.data)
            } else {
                // redirect to 404
                navigate('/404')
            }
        })
    }, [tag])

    return (
        <div>TagScreen</div>
    )
}

export default TagScreen