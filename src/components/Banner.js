import React, { Component } from "react";
import "../styles/Banner.css";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <img src={this.props.image} alt="" className="imgBanner" />
        <h1 className="msgBanner">{this.props.legend}</h1>
      </section>
    );
  }
}

export default Banner;
