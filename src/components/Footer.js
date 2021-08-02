import React, { Component } from 'react';
import imgFooter from "../assets/logo_white.png"
import '../styles/Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <img src={imgFooter} alt="Logo de Kasa" className="imgFooter"/>
                <p className="copyrights">© Copyrights 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;
