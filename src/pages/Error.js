import React, { Component } from "react";
import "../styles/Error.css";
import Header from "../components/Header";

class Error extends Component {
  render() {
    return (
      <div className="errorPage">
        <Header />
        <section className="errorSection">
          <p className="errorCode">404</p>
          <p className="errorMsg">Oups! La page que vous demandez n'existe pas.</p>
          <a href="/" className="redirection">
            Retourner sur la page d'accueil
          </a>
        </section>
      </div>
    );
  }
}

export default Error;
