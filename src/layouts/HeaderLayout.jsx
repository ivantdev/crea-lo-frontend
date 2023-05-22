import React from 'react'
import { Box } from '@mui/material'
import homeIcon from '../assets/home.png'
import { useNavigate } from 'react-router-dom'

const HeaderLayout = () => {
    const navigate = useNavigate()
    const [isHomeScreen, setIsHomeScreen] = React.useState(false)

    React.useEffect(() => {
        if (window.location.pathname === '/') {
            setIsHomeScreen(true)
        } else {
            setIsHomeScreen(false)
        }
    }, [window.location.pathname])
    if (isHomeScreen) {
        return null
    }

    return (
        <>
            <Box sx={{
                position: 'fixed',
                top: "36px",
                left: "36px",
                cursor: "pointer",
                zIndex: 10
            }} onClick={() => {
                navigate('/')
            }}>
                <img src={homeIcon} alt="home" />
            </Box>
        </>
    )
}

export default HeaderLayout