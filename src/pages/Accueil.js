import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HousesList from "../components/HousesList";
import imgHome from "../assets/IMG.png";

class Accueil extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner image={imgHome} legend="Chez vous, partout et ailleurs" />
        <HousesList />
        <Footer />
      </div>
    );
  }
}

export default Accueil;
