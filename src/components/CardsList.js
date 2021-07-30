import React, { Component } from "react";
import "../styles/CardsList.css";
import HousesList from "../data/data";

class CardsList extends Component {
  render() {
    const houses = HousesList;
    return (
      <section className="cardsList">
        {houses.map((house, index) => (
          <article key={`${house}-${index}`} className="card">
            <img src={house.cover} alt="Logement" className="imgHouse" />
            <p className="legend">{house.title}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default CardsList;
