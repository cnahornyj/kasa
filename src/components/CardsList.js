import React, { Component } from "react";
import "../styles/CardsList.css";
import Data from "../data/data";

class HousesList extends Component {
  render() {
    const houses = Data;
    return (
      <section className="housesList">
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

export default HousesList;
