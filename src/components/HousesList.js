import React, { Component } from "react";
import "../styles/HousesList.css";
import Data from "../data/data";

class HousesList extends Component {
  render() {
    const houses = Data;
    return (
      <section className="housesList">
        {houses.map((house, index) => (
          <article key={`${house}-${house.id}`} className="card">
            <a href={`/house/${house.id}`}>
              <img src={house.cover} alt="Logement" className="imgHouse" />
              <p className="legend">{house.title}</p>
            </a>
          </article>
        ))}
      </section>
    );
  }
}

export default HousesList;
