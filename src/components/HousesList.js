import React, { Component } from "react";
import "../styles/HousesList.css";
import Data from "../data/data";
import { NavLink } from "react-router-dom";

class HousesList extends Component {
  render() {
    // Récupération des données via la variable houses
    const houses = Data;
    // Méthode map sur la liste des logements et lien vers leur page
    return (
      <section className="housesList">
        {houses.map((house, index) => (
          <article key={`${house}-${house.id}`} className="card">
            <NavLink to={`/house/${house.id}`}>
              <img src={house.cover} alt="Logement" className="imgHouse" />
              <p className="legend">{house.title}</p>
            </NavLink>
          </article>
        ))}
      </section>
    );
  }
}

export default HousesList;
