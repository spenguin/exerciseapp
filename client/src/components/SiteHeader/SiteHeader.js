// Site Header component
// called from App.js

import React from 'react'
import {NavLink} from 'react-router-dom'
// import Logo from "../../assets/images/logo/Exercist logo.png"; FIX
import "./SiteHeader.scss"

export default function SiteHeader() {
    return (
        <header className="site-header">
            <NavLink to="/" className="site-logo"><h1 className="site-logo__text">Exercist</h1></NavLink>
        </header>
    )
}
