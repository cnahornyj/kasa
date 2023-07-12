import "../styles/App.css";
import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../views/Home";
import Propos from "../views/Propos";
import HousePage from "../views/HousePage";
import Error from "../views/Error"

class App extends Component {

  render() {
    return (
      // Mise en place du routing
       <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
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
