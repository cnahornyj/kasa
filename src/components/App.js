import "../styles/App.css";
import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Propos from "../pages/Propos";
import HousePage from "../pages/HousePage";
import Error from "../pages/Error"

class App extends Component {

  render() {
    return (
      // Mise en place du routing
       <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/a-propos" exact component={Propos}/>
         <Route path="/house/:id" component={HousePage}/>
         <Route component={Error}/>
       </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
