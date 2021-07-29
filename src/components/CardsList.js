import React, { Component } from 'react';
import Card from './Card';
import '../styles/CardsList.css'

class CardsList extends Component {
    render() {
        return (
            <section className="cardsList">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        );
    }
}

export default CardsList;