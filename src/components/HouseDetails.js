import React, { Component } from "react";

class HouseLocalisation extends Component {
  render() {
    return (
      <article className="housedetails">
        <h2 style={{marginBottom:"0"}}>{this.props.title}</h2>
        <p style={{marginTop:"10px"}}>{this.props.location}</p>
        <article style={{width:"500px"}}>
          {this.props.tags.map((tag, index) => (
            <span key={`${tag}-${index}`}>{tag}</span>
          ))}
        </article>
      </article>
    );
  }
}

export default HouseLocalisation;
