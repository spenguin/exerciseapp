// Site Header component
// called from App.js

import React from 'react'
import {NavLink} from 'react-router-dom'
import "./SiteHeader.scss"

export default function SiteHeader() {
    return (
        <header className="site-header">
            <NavLink to="/">Home</NavLink>
        </header>
    )
}
