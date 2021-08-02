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

    return (
      <div>
        <Header />
        <section style={{ display: "flex", justifyContent: "space-between", width:"82%", margin:"auto", color:"#ff6060" }}>
          <HouseDetails
            title={house.title}
            location={house.location}
            tags={house.tags}
          />
          <section style={{ display: "flex", flexDirection: "column" }}>
          <section style={{ display: "flex" }}>
            <HostProfile name={house.host.name} picture={house.host.picture} />
          </section>
          <Rating />
          </section>
        </section>
        <section className="textBloc" style={{ display: "flex", width: "91%", margin:"auto" }}>
        <TextBloc title="Description" description={house.description} />
        <TextBloc
          title="Equipements"
          description={house.equipments.map((equipment, index) => (
            <p key={`${equipment}-${index}`}>{equipment}</p>
          ))}
        />
        </section>
        <Footer />
      </div>
    );
  }
}

export default HousePage;
