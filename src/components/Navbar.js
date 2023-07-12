import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/home" activeClassName="pageActive" className="lnk">
          Accueil
        </NavLink>
        <NavLink exact to="/a-propos" activeClassName="pageActive" className="lnk">
          A Propos
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
