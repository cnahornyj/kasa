import React, { Component } from "react";
import "../styles/HousePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery  from "../components/Gallery";
import Rating from "../components/Rating";
import HostProfile from "../components/HostProfile";
import HouseDetails from "../components/HouseDetails";
import Collapse from "../components/Collapse";

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

    // Récupération de la data stockée dans le localStorage
    const data = localStorage.getItem("houses");
    // Conversion JSON en JS
    const houses = JSON.parse(data);
    // Récupération de l'id du logement via les paramètres de l'url
    const params = this.props.match.params.id;
    // Trouver l'index du logement dans le tableau de logements
    const index = findIndexByKeyValue(houses, "id", params);
    // Récupération uniquement des informations propres au logement
    const house = houses[index];

    return (
      <section className="housepage">
      <Header />
      <Gallery pictures={house.pictures}/>
        <article className="locAndHost">
          <HouseDetails
            title={house.title}
            location={house.location}
            tags={house.tags}
          />
          <article className="host">
            <article>
              <HostProfile
                name={house.host.name}
                picture={house.host.picture}
              />
            </article>
            <Rating rating={house.rating} />
          </article>
        </article>
        <section className="blocDescription">
          <Collapse title="Description" description={house.description}/>
          <Collapse
            title="Equipements"
            description={house.equipments.map((equipment, index) => (
              <li key={`${equipment}-${index}`}>{equipment}</li>
            ))}
          />
        </section>
        <Footer />
      </section>
    );
  }
}

export default HousePage;
