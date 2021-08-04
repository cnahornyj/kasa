import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/TextBloc.css";

class TextBloc extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  render() {

    let button;
    if (this.state.isVisible){  
      button = <FontAwesomeIcon icon={faChevronUp} className="arrow" onClick={() => this.onClick()} />
      } else {
      button = <FontAwesomeIcon icon={faChevronDown} className="arrow" onClick={() => this.onClick()} />
      }

    return (
      <article className="textBloc">
        <div className="title">
          <h2 className="subtitle">{this.props.title}</h2>
          {button}
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

export default TextBloc;
