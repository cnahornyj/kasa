import React, { Component } from 'react';
import "../styles/Gallery.css";

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pictures: [],
            currentPictureIndex: 0,
        }
    }

    componentDidMount() {
        this.setState({ pictures: this.props.pictures })
    }

    getSRC = () => {
        return this.state.pictures[this.state.currentPictureIndex]
            ? this.state.pictures[this.state.currentPictureIndex]
            : "noPictures"
    }

    previous = () => {
        const index =
            this.state.currentPictureIndex === 0
                ? this.props.pictures.length - 1
                : this.state.currentPictureIndex - 1

        this.setState({ currentPictureIndex: index })
    }

    next = () => {
        const index =
            this.state.currentPictureIndex === this.props.pictures.length - 1
                ? 0
                : this.state.currentPictureIndex + 1

        this.setState({ currentPictureIndex: index })
    }

    getNavigation = () => {
        return (
            <nav className="galleryNav">
                <i className="fas fa-chevron-left" onClick={this.previous}></i>
                <i className="fas fa-chevron-right" onClick={this.next}></i>
                <div className="galleryCounter">
                    {this.state.currentPictureIndex + 1} / {this.props.pictures.length}
                </div>
            </nav>
        ) 
    }

    render() {
        return (
            <section className="gallery">
                <article className="galleryPicturesBox">
                    <img src={this.getSRC()} alt="appartement" className="galleryPictures"></img>
                    {this.getNavigation()}
                </article>
            </section>
        )
    }
}

export default Gallery;