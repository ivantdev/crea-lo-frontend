import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'mui-image'

const TagScreen = () => {
    const tag = useParams().tag

    const navigate = useNavigate()

    return null

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