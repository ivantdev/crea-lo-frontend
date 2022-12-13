import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTagContent } from '../api'
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'mui-image'

const TagScreen = () => {
    const tag = useParams().tag

    const [creation, setCreation] = useState(null)
    const [image, setImage] = useState(null)
    const [video, setVideo] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTagContent(tag)
            const creationsData = data.creations.data.data[0].attributes.creations.data
            const creationsLength = creationsData.length
            const imagesData = data.images.data.data[0].attributes.images.data
            const imagesLength = imagesData.length
            const videosData = data.videos.data.data[0].attributes.videos.data
            const videosLength = videosData.length
            // choose random creation
            setCreation(creationsData[Math.floor(Math.random() * creationsLength)])
            // choose random image
            setImage(imagesData[Math.floor(Math.random() * imagesLength)])
            // choose random video
            setVideo(videosData[Math.floor(Math.random() * videosLength)])

        }
        fetchData()
    }, [tag])


    // Don't touch this
    return (
        image ? creation ? video ? (
            <Carousel>
                {/* {creation && (
                <div>
                    <img src={creation.attributes.image_url} />
                    <p className="legend">{creation.attributes.title}</p>
                </div>
            )} */}
                {image && (
                    <div>
                        <Image src={image ? image.attributes.link.data.attributes.formats.large.url : ''} />
                        <p className="legend">{image.attributes.name}</p>
                    </div>
                )}
                {video && (
                    <div>
                        <iframe width="560" height="315" src={video.attributes.link} title={video.attributes.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="legend">{video ? video.attributes.name : ''}</p>
                    </div>
                )}
            </Carousel>) : null : null : null
    )
}

export default TagScreen