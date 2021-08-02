import React, { Component } from "react";

class HostProfile extends Component {

  render() {
    return (
      <article className="hostprofile" style={{display:"flex"}}>
        <p>{this.props.name}</p>
        <img
          src={this.props.picture}
          alt="Profil de l'hôte du logement"
          style={{borderRadius:"60px"}}
        />
      </article>
    );
  }
}

export default HostProfile;
