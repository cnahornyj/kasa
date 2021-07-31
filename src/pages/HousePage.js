import React, { Component } from "react";
import "../styles/HousePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import TexteAPropos from "../components/TexteAPropos";
import Footer from "../components/Footer";

class HousePage extends Component {
  render() {
    const houses = {
      id: "c67ab8a7",
      title: "Appartement cosy",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
      ],
      description:
        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
      host: {
        name: "Nathalie Jean",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 17e",
      equipments: [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI",
      ],
      tags: ["Batignolle", "Montmartre"],
    };

    return (
      <div>
        <Header />
        <section className="housePage">
          <div className="locAndHost">
            <article className="localisation">
              <h2 className="titleHouse">{houses.title}</h2>
              <p className="city">{houses.location}</p>
              <article className="tags">
                {houses.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`}>{tag}</span>
                ))}
              </article>
            </article>
            <div style={{display: "flex", flexDirection: "column"}}>
            <article className="host">
              <p className="nameHost">{houses.host.name}</p>
              <img
                src={houses.host.picture}
                alt="Profil de l'hôte du logement"
                className="imgHost"
              />
            </article>
            <FontAwesomeIcon icon={faStar} className="arrow" />
            </div>
          </div>
          <article className="equipments">
            <TexteAPropos
              title="Description"
              description={houses.description}
            ></TexteAPropos>
            <TexteAPropos
              title="Equipements"
              description={houses.equipments.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
              ))}
            ></TexteAPropos>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default HousePage;
