import React, { Component } from "react";
import "../styles/Rating.css";

class Rating extends Component {
  render() {
    const ratingScale = [1, 2, 3, 4, 5];

    return (
      <article className="ratings">
        {ratingScale.map((scale) => (
          <i className={`fas fa-star${scale <= this.props.rating ? "rating" : ""}`} key={`star-${scale}`}></i>
        ))}
      </article>
    );
  }
}

export default Rating;
