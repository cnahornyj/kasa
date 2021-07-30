import React, { Component } from "react";
import "../styles/Error.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

class Error extends Component {
  render() {
    return (
      <div className="errorPage">
        <Header />
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" className="visited">
          Retourner sur la page d'accueil
        </a>
        <Footer />
      </div>
    );
  }
}

export default Error;
