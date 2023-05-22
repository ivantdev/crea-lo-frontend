import React from 'react'
import logo from "../assets/logo crea-lo.png"
import "../css/HomeScreen.css"
import { ColorModeContext } from '../contexts/ThemeContext'
import { useLocation } from 'react-router-dom'
import fondo_18 from "../assets/images/fondos-18.jpeg"
import fondo_14 from "../assets/images/fondos-14.jpeg"
import fondo_15 from "../assets/images/fondos-15.jpeg"
import fondo_2 from "../assets/images/fondos-2.jpeg"
import fondo_5 from "../assets/images/fondos-5.jpeg"


const HomeScreen = () => {
    const { homeIndexPalette, theme } = React.useContext(ColorModeContext)
    const location = useLocation()
    const background = [
        [
            // BG 1
            {
                backgroundImage: `url('${fondo_18}')`,
                mixBlendMode: "difference",
            },
            {
                backgroundImage: `url('${fondo_14}')`,
                mixBlendMode: "color-burn",
                opacity: "0.5",
                zIndex: "2",
            },
            {
                backgroundImage: `url('${fondo_15}')`,
                mixBlendMode: "saturation",
                transform: "rotate(-180deg)",
            },
        ],
        [
            // BG 2
            {
                backgroundImage: `url('${fondo_18}')`,
                mixBlendMode: "saturation",
            },
            {
                backgroundImage: `url('${fondo_2}')`,
                mixBlendMode: "color-burn",
                opacity: "0.9",
                zIndex: 5,
            },
            {
                backgroundImage: `url('${fondo_14}')`,
                mixBlendMode: "color-burn",
                transform: "rotate(-180deg)",
                opacity: "0.5",
            },
            {
                backgroundImage: `url('${fondo_5}')`,
                mixBlendMode: "saturation",
                transform: "rotate(-180deg)",
            },
        ],
        [
            // BG 3
            {
                backgroundImage: `url('${fondo_18}')`,
                mixBlendMode: "difference",
            },
            {
                backgroundImage: `url('${fondo_14}')`,
                mixBlendMode: "luminosity",
                opacity: "0.5",
                zIndex: "2",
            },
        ],
        [
             // BG 4
             {
                backgroundImage: `url('${fondo_2}')`,
                mixBlendMode: "multiply",
                opacity: "0.9",
            },
            {
                backgroundImage: `url('${fondo_14}')`,
                mixBlendMode: "color-burn",
                opacity: "0.5",
            },
            {
                backgroundImage: `url('${fondo_5}')`,
                mixBlendMode: "color",
            },
        ],
        [
             // BG 5
             {
                backgroundImage: `url('${fondo_14}')`,
                mixBlendMode: "color-burn",
                opacity: "0.5",
            },
            {
                backgroundImage: `url('${fondo_5}')`,
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