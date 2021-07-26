import "../styles/Header.css";
import React, { Component } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo_pink.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Logo de Kasa" className="img" />
        <Navbar />
      </header>
    );
  }
}

export default Header;
