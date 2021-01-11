import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import classes from "./App.module.css";
import Teams from "./components/teams/teams";
import Team from "./components/teams/team/team";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Header/>
          <Switch>
         
            <Route path="/teams" component={Teams} />
            <Route path="/team/:teamId" component={Team} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
