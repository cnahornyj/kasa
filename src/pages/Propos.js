import React, { Component } from "react";
import imgPropos from "../assets/montagne.png";
import "../styles/Propos.css";
import TexteAPropos from "../components/TexteAPropos";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Propos extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="propos">
          <img src={imgPropos} alt="" className="imgBanner" />
          <TexteAPropos />
          <TexteAPropos />
          <TexteAPropos />
          <TexteAPropos />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Propos;
