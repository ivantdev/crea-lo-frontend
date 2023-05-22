import React from 'react'
import logo from "../assets/logo crea-lo.png"
import "../css/HomeScreen.css"
import { ColorModeContext } from '../contexts/ThemeContext'
import { useLocation } from 'react-router-dom'

const HomeScreen = () => {
    const { homeIndexPalette, theme } = React.useContext(ColorModeContext)
    const location = useLocation()
    const background = [
        [
            // BG 1
            {
                backgroundImage: "url('src/assets/images/fondos-18.jpeg')",
                mixBlendMode: "difference",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-14.jpeg')",
                mixBlendMode: "color-burn",
                opacity: "0.5",
                zIndex: "2",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-15.jpeg')",
                mixBlendMode: "saturation",
                transform: "rotate(-180deg)",
            },
        ],
        [
            // BG 2
            {
                backgroundImage: "url('src/assets/images/fondos-18.jpeg')",
                mixBlendMode: "saturation",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-2.jpeg')",
                mixBlendMode: "color-burn",
                opacity: "0.9",
                zIndex: 5,
            },
            {
                backgroundImage: "url('src/assets/images/fondos-14.jpeg')",
                mixBlendMode: "color-burn",
                transform: "rotate(-180deg)",
                opacity: "0.5",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-5.jpeg')",
                mixBlendMode: "saturation",
                transform: "rotate(-180deg)",
            },
        ],
        [
            // BG 3
            {
                backgroundImage: "url('src/assets/images/fondos-18.jpeg')",
                mixBlendMode: "difference",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-14.jpeg')",
                mixBlendMode: "luminosity",
                opacity: "0.5",
                zIndex: "2",
            },
        ],
        [
             // BG 4
             {
                backgroundImage: "url('src/assets/images/fondos-2.jpeg')",
                mixBlendMode: "multiply",
                opacity: "0.9",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-14.jpeg')",
                mixBlendMode: "color-burn",
                opacity: "0.5",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-5.jpeg')",
                mixBlendMode: "color",
            },
        ],
        [
             // BG 5
             {
                backgroundImage: "url('src/assets/images/fondos-14.jpeg')",
                mixBlendMode: "color-burn",
                opacity: "0.5",
            },
            {
                backgroundImage: "url('src/assets/images/fondos-5.jpeg')",
                mixBlendMode: "color",
            },
        ],
    ]

    return (
        <>
            <div id="home-background" style={{ backgroundColor: theme.palette.primary.main }} />
            {
                background[homeIndexPalette].map((background, index) => (
                    <div key={index} id="home-background" style={background} />
                ))
            }
            <div id="home-logo-container">
                <img src={logo} alt="logo" id="home-logo" />
                <div id="home-logo-text">
                    {/* <h1>Otros mundos posibles en la UNAL</h1> */}
                </div>
            </div>
        </>
    )
}

export default HomeScreen