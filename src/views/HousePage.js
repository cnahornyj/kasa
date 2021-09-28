import React, { Component } from "react";
import "../styles/HousePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Rating from "../components/Rating";
import HostProfile from "../components/HostProfile";
import HouseDetails from "../components/HouseDetails";
import Collapse from "../components/Collapse";

class HousePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: null,
    };
  }

  findIndexByKeyValue(house, key, valuetosearch) {
    for (let i = 0; i < house.length; i++) {
      if (house[i][key] === valuetosearch) {
        return i;
      }
    }
    return null;
  }

  componentDidMount() {
    const data = localStorage.getItem("houses");
    const params = this.props.match.params.id;
    const houses = JSON.parse(data);
    const index = this.findIndexByKeyValue(houses, "id", params);
    const apartment = houses[index];
    this.setState({
      house: apartment,
    });
  }

  render() {
    if (this.state.house != null) {
      return (
        <section className="housepage">
          <Header />
          <Gallery pictures={this.state.house.pictures} />
          <article className="locAndHost">
            <HouseDetails
              title={this.state.house.title}
              location={this.state.house.location}
              tags={this.state.house.tags}
            />
            <article className="host">
              <article>
                <HostProfile
                  name={this.state.house.host.name}
                  picture={this.state.house.host.picture}
                />
              </article>
              <Rating rating={this.state.house.rating} />
            </article>
          </article>
          <section className="blocDescription">
            <Collapse
              title="Description"
              description={this.state.house.description}
            />
            <Collapse
              title="Equipements"
              description={this.state.house.equipments.map(
                (equipment, index) => (
                  <li key={`${equipment}-${index}`}>{equipment}</li>
                )
              )}
            />
          </section>
          <Footer />
        </section>
      );
    } else {
      return(
        <div>Error</div>
      )
    }
  }
}

export default HousePage;
