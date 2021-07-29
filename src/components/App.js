import "../styles/App.css";
import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
