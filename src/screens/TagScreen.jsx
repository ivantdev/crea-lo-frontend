import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Image from 'mui-image'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { styled } from '@mui/system';

// wrapper to modify styles from react-awesome-slider library
const Wrapper = styled('div')(({ theme }) => ({
    '& .awssld': {
        height: "100vh"
    },

    '& .awssld__bullets': {
        bottom: "40px",
        zIndex: 2,
    }
}));

const TagScreen = () => {
    const tag = useParams().tag

    useEffect(() => {

    }, [])
    const navigate = useNavigate()

    return (
        <Wrapper>
            <AwesomeSlider
                organicArrows={false}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
        </Wrapper>
    )
}

export default TagScreen