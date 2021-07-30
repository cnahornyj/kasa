import "../styles/App.css";
import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Accueil from "../pages/Accueil";
import Propos from "../pages/Propos";
import Error from "../pages/Error"

class App extends Component {
  render() {
    return (
       <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Accueil}/>
         <Route path="/a-propos" exact component={Propos}/>
         <Route component={Error}/>
       </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
