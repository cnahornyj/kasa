import React, { Component } from "react";
import "../styles/HouseDetails.css";

class HouseDetails extends Component {
  render() {
    return (
      <article className="housedetails">
        <h2>{this.props.title}</h2>
        <p>{this.props.location}</p>
        <article className="tagsOfHouse">
          {this.props.tags.map((tag, index) => (
            <span key={`${tag}-${index}`}>{tag}</span>
          ))}
        </article>
      </article>
    );
  }
}

export default HouseDetails;
