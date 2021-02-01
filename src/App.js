import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import classes from "./App.module.css";
import Teams from "./components/teams/teams";
import Team from "./components/teams/team/team";
import CreateTeam from "./components/teams/createTeam/createTeam";
import CreatePlayer from "./components/players/createPlayer/createPlayer";
import Players from './components/players/players';
import TeamOptions from "./components/teams/teamOptions/teamOptions";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/new_player" component={CreatePlayer}/>
            <Route path="/players" component={Players}/>
            <Route path="/new_team" component={CreateTeam}/>
            <Route path="/all_teams" component={Teams} />
            <Route path="/team_options" component={TeamOptions} />
            <Route path="/team/:teamId" component={Team} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
