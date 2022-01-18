// Site Footer component
// called from App.js

import React from 'react'
import {NavLink} from 'react-router-dom';

import "./SiteFooter.scss"

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <NavLink to="/terms" className="site-footer__link">Terms &amp; Conditions</NavLink>
            <NavLink to="/contact" className="site-footer__link">Contact the Developer</NavLink>
        </footer>
    )
}