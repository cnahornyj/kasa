import React, { Component } from "react";

class HostProfile extends Component {

  render() {
    return (
      <article className="hostprofile" style={{display:"flex"}}>
        <p style={{width:"50px",textAlign:"right",marginRight:"15px"}}>{this.props.name}</p>
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
