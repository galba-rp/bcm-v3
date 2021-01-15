import React, { Component } from "react";
import TeamCard from "./teamCard/teamCard";
import { connect } from "react-redux";
import * as teamsActions from "../../store/actions/teamsAct";


class Teams extends Component {
  state = {};
  // getting teams info from DB
  componentDidMount() {
    this.props.getTeamsInfo();
  }
 handleTeam = (name) => {
  this.props.history.push(`/team/${name}`)
  }    
  render() { 
    return (
      <div className={"justify-content-around mt-5 d-flex"}>
        {this.props.teamDetails.map((team) => {
          return (
            <TeamCard
              key={team.name}
              teamData={team}
              click={(name) => this.handleTeam(name)}
              id={team.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teamDetails: state.teams.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTeamsInfo: () => dispatch(teamsActions.getTeamsInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
