import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../styles/Rating.css'

class Rating extends Component {
  render() {
    return (
      <article className="ratings" style={{textAlign:"end"}}>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
      </article>
    );
  }
}

export default Rating;
