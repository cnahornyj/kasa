import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import '../styles/TexteAPropos.css'

class TexteAPropos extends Component {
  render() {
    return (
      <article>
        <div className="title">
          <h2 className="subtitle">Fiabilité</h2>
          <FontAwesomeIcon icon={faChevronDown} className="arrow" />
        </div>
        <p className="description">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </article>
    );
  }
}

export default TexteAPropos;
