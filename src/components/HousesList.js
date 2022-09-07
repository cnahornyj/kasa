import React, { Component } from "react";
import "../styles/HousesList.css";
import { Link } from "react-router-dom";

class HousesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    fetch("https://cnahornyj.github.io/jsonkasapi/data.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          houses: result,
        });
      localStorage.setItem("houses", JSON.stringify(this.state.houses));
      });
  }

  render() {
    return (
      <section className="housesList">
        {this.state.houses.map((house) => (
          <article key={`${house}-${house.id}`} className="card">
            <Link to={`/house/${house.id}`}>
              <img src={house.cover} alt="Logement" className="imgHouse" />
              <p className="legend">{house.title}</p>
            </Link>
          </article>
        ))}
      </section>
    );
  }
}

export default HousesList;
