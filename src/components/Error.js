import React, { Component } from "react";
import "../styles/Error.css";

class Error extends Component {
  render() {
    return (
      <div className="errorPage">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/home" className="visited">Retourner sur la page d'accueil</a>
      </div>
    );
  }
}

export default Error;
