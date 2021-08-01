import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import '../styles/TextHouse.css';

class TextHouse extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      isUp: false,
    };
  }

  render() {
    return (
      <article className="textHouse" style={{width:"25px"}}>
        <div className="titleDescHouse">
          <h2 className="titlebis">{this.props.title}</h2>
          <FontAwesomeIcon
            icon={this.isUp ? faChevronUp : faChevronDown}
            onClick={() => this.onClick()}
          />
        </div>
        {this.state.isVisible ? <p className="dscp">{this.props.description}</p> : null}
      </article>
    );
  }

  onClick() {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  }
}

export default TextHouse;
