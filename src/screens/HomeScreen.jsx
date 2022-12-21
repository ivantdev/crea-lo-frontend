import React from 'react'
import logo from "../assets/logo.png"
import "../css/HomeScreen.css"

const HomeScreen = () => {

    return (
        <>
            <div id="home-background" />
            <div id="home-logo-container">
                <img src={logo} alt="logo" id="home-logo" />
                <div id="home-logo-text">
                    <h1>Otros mundos posibles en la UNAL</h1>
                </div>
            </div>
        </>
    )
}

export default HomeScreen