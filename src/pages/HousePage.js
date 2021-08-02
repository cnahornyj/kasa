import React, { Component } from "react";
import "../styles/HousePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TexteAPropos from "../components/TexteAPropos"
import data from "../data/data";

function findIndexByKeyValue(house, key, valuetosearch) {
  for (let i = 0; i < house.length; i++) {
    if (house[i][key] === valuetosearch) {
      return i;
    }
  }
  return null;
}

class HousePage extends Component {
  render() {

    const houses = data;
    const idHouse = window.location.href.substring(28);
    const index = findIndexByKeyValue(houses, "id", idHouse);
    const house = houses[index];

    return (
      <div>
        <Header />
        <section className="housePage">
          <div className="locAndHost">
            <article className="localisation">
              <h2 className="titleHouse">{house.title}</h2>
              <p className="city">{house.location}</p>
              <article className="tags">
                {house.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`}>{tag}</span>
                ))}
              </article>
            </article>
            <div style={{display: "flex", flexDirection: "column"}}>
            <article className="host">
              <p className="nameHost">{house.host.name}</p>
              <img
                src={house.host.picture}
                alt="Profil de l'hôte du logement"
                className="imgHost"
              />
            </article>
            <FontAwesomeIcon icon={faStar} className="arrow" />
            </div>
          </div>
          <article style={{display:"flex",width:"82%",margin:"auto",justifyContent:"space-between"}}>
          <TexteAPropos title="Description" description={house.description} />
          <TexteAPropos title="Equipements" description={house.equipments} />
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default HousePage;
