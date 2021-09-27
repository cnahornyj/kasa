import React, { Component } from "react";
import "../styles/HostProfile.css";

class HostProfile extends Component {

  render() {
    return (
      <article className="hostprofile">
        <p>{this.props.name}</p>
        <img
          src={this.props.picture}
          alt="Profil de l'hôte du logement"
        />
      </article>
    );
  }
}

export default HostProfile;
