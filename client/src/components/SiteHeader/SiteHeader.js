// Site Header component
// called from App.js

import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from "../../assets/images/logo/Exercist logo.png";
import "./SiteHeader.scss"

export default function SiteHeader() {
    return (
        <header className="site-header">
            <NavLink to="/" className="site-logo"><img src={ `${Logo}` } alt="Exercist" className="site-logo__image"/></NavLink>
        </header>
    )
}
