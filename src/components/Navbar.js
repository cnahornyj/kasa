import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="ul">
          <li className="li">Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
