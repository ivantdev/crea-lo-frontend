import React from 'react'
import logo from "../assets/logo crea-lo.png"
import "../css/HomeScreen.css"
import { ColorModeContext } from '../contexts/ThemeContext'
import { useLocation } from 'react-router-dom'
import home_1 from "../assets/images/Home 1.jpg"
import home_2 from "../assets/images/Home 2.jpg"
import home_3 from "../assets/images/Home 3.jpg"
import home_4 from "../assets/images/Home 4.jpg"
import home_5 from "../assets/images/Home 5.jpg"


const HomeScreen = () => {
    const { homeIndexPalette, theme } = React.useContext(ColorModeContext)
    const location = useLocation()
    const background = [
        [
            // BG 1
            {
                backgroundImage: `url('${home_1}')`,

            },
        ],
        [
            // BG 2
            {
                backgroundImage: `url('${home_2}')`,

            },
        ],
        [
            // BG 3
            {
                backgroundImage: `url('${home_3}')`,

            },
        ],
        [
             // BG 4
             {
                backgroundImage: `url('${home_4}')`,

            },
        ],
        [
             // BG 5
             {
                backgroundImage: `url('${home_5}')`,

            },
        ],
    ]

    return (
        <>
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