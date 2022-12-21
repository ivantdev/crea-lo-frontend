import React from 'react'
import { Box } from '@mui/material'
import homeIcon from '../assets/home.png'
import { useNavigate } from 'react-router-dom'

const HeaderLayout = () => {
    const navigate = useNavigate()

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    color: 'text.primary',
                    borderRadius: 1,
                    justifyContent: 'flex-start',
                    p: 3,
                }}
            >
            </Box>
            <Box sx={{
                position: 'fixed',
                top: "36px",
                left: "36px",
                cursor: "pointer",
                zIndex: 3
            }} onClick={() => {
                navigate('/')
            }}>
                <img src={homeIcon} alt="home" />
            </Box>
        </>
    )
}

export default HeaderLayout