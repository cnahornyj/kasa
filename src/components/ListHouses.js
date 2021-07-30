import HousesList from "../data/data";
import React, { Component } from "react";

class ListHouses extends Component {
  render() {
    return (
      <section className="ListHouses">
        {HousesList.map((house, index) => (
          <article key={`${house}-${index}`} className="card">
            <img src={house.cover} alt="Logement" className="imgHouse" />
            <p className="legend">{house.title}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default ListHouses;
