import React, { Component } from "react";
import imgPropos from "../assets/montagne.png";
import "../styles/Propos.css";
import TextBloc from "../components/TextBloc";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Propos extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="propos">
          <img src={imgPropos} alt="" className="imgPropos" />
          <TextBloc
            title="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <TextBloc
            title="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <TextBloc
            title="Service"
            description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <TextBloc
            title="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Propos;
