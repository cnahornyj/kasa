import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Router>
      <nav>
        <ul className="ul">
          <li className="li"><Link to="/">Accueil</Link></li>
          <li><Link to="/propos">A Propos</Link></li>
        </ul>
      </nav>
      </Router>
    );
  }
}

export default Navbar;
