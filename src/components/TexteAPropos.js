import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/TexteAPropos.css";

class TexteAPropos extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      isUp: false
    };
  }

  render() {
    return (
      <article style={{width:"50%"}}>
        <div className="title">
          <h2 className="subtitle">{this.props.title}</h2>
          <FontAwesomeIcon icon={this.isUp ? faChevronUp : faChevronDown} className="arrow" onClick={() => this.onClick()} />
        </div>
        {this.state.isVisible ? (
          <p className="description">{this.props.description}</p>
        ) : null}
      </article>
    );
  }

  onClick() {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  }
}

export default TexteAPropos;
