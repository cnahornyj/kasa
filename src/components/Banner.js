import React, { Component } from 'react';
import imgBanner from "../assets/IMG.png";
import "../styles/Banner.css";

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={imgBanner} alt="" className="imgBanner"/>
                <h1 className="msgBanner">Chez vous, partout et ailleurs</h1>
            </div>
        );
    }
}

export default Banner;