import React, { Component } from "react";
import imgPropos from "../assets/montagne.png";
import "../styles/Propos.css";
import TexteAPropos from "./TexteAPropos";

class Propos extends Component {
  render() {
    return (
      <section className="propos">
        <img src={imgPropos} alt="" className="imgBanner" />
        <TexteAPropos />
        <TexteAPropos />
        <TexteAPropos />
        <TexteAPropos />
      </section>
    );
  }
}

export default Propos;
