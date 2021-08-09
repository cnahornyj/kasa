import React, { Component } from "react";
import "../styles/HousePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import HostProfile from "../components/HostProfile";
import HouseDetails from "../components/HouseDetails";
import TextBloc from "../components/TextBloc";
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

    // Conversion de la note du logement sur /5 en nombre
    const nbOfStars = parseInt(house.rating) + 1;
    let arrayOfRatings = [];

    for (let logement = 1; logement < nbOfStars; logement++) {
      arrayOfRatings.push(logement);
    }

    console.log(arrayOfRatings);

    return (
      <section className="housepage">
        <Header />
        <article>
          <HouseDetails
            title={house.title}
            location={house.location}
            tags={house.tags}
          />
          <article>
            <article>
              <HostProfile
                name={house.host.name}
                picture={house.host.picture}
              />
            </article>
            <Rating />
            <p>{house.rating}</p>
          </article>
        </article>
        <article>
          <TextBloc title="Description" description={house.description} />
          <TextBloc
            title="Equipements"
            description={house.equipments.map((equipment, index) => (
              <p key={`${equipment}-${index}`}>{equipment}</p>
            ))}
          />
        </article>
        <Footer />
      </section>
    );
  }
}

export default HousePage;
