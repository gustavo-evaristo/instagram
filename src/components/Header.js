import React from 'react'

import './Header.css'

import Logo from '../assets/logo.svg'
import Camera from '../assets/camera.svg'

export const Header = () => {
    return (
        <header id="main-header">
            <div className="header-content">
                <img src={Logo} alt="Instagram"></img>
                <img src={Camera} alt="Enviar Publicação"></img>
            </div>
        </header>
    )
}