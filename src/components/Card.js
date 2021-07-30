import React, { Component } from 'react';
import '../styles/Card.css';
import HousesList from '../data/data'

/* const house = {
    name: 'Appartement cosy',
    src: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
} */


class Card extends Component {
    render() {
        const houses = HousesList;
        return (
            <ul>
            {houses.map((house) => (
                <li>{house.title}</li>
            ))}
        </ul>
        );
    }
}

export default Card;