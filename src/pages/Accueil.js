import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HousesList from "../components/CardsList";

class Accueil extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <HousesList />
        <Footer />
      </div>
    );
  }
}

export default Accueil;
