import React, { Component } from "react";

class HouseLocalisation extends Component {
  render() {
    return (
      <article className="housedetails">
        <h2>{this.props.title}</h2>
        <p>{this.props.location}</p>
        <article>
          {this.props.tags.map((tag, index) => (
            <span key={`${tag}-${index}`}>{tag}</span>
          ))}
        </article>
      </article>
    );
  }
}

export default HouseLocalisation;
