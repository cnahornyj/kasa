import React, { Component } from 'react';
import '../styles/Card.css';

const house = {
    name: 'Appartement cosy',
    src: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
}

class Card extends Component {
    render() {
        return (
            <article className="card">
                <img src={house.src} alt="Logement" className="imgHouse"/>
                <p className="legend">{house.name}</p>
            </article>
        );
    }
}

export default Card;