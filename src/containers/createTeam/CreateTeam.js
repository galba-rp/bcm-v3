import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as createTeamActions from "../../store/actions/createTeamAct";

class CreateTeam extends Component {
  state = {
    teamName: "",
    image: "",
    players: [{ name: "" }],
  };
  //   changeHandler = (event) => {
  //     let value = event.target.value;
  //     let name = event.target.name;
  //     if (name === "image") {
  //       value = event.target.files[0];
  //     }
  //     this.setState({
  //       ...this.state,
  //       [event.target.name]: value,
  //     });
  //   };

  submitHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("name", this.state.teamName);

    axios
      .post("http://localhost:3000/create-team", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("HERE", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div class="form-group">
          <label for="teamName">Team name</label>
          <input
            type="text"
            name="teamName"
            value={this.props.teamName}
            class="form-control"
            id="teamName"
            aria-describedby="teamNameHelp"
            onChange={this.props.getFormInput}
          ></input>
        </div>
        <div className="form-group" onChange={this.props.getFormInput}>
          <input type="file" name="image" />
        </div>
        {/* {this.props.players.map((val, idx) => {
          let playerId = "player${idx}"; */}
        return (
        <div>
          <label for="exampleInputEmail1">Add player</label>
          <input
            type="text"
            name="playerName"
            value={this.props.playerName}
            class="form-control"
            id="teamPlayer"
            aria-describedby="teamNameHelp"
            onChange={this.props.getFormInput}
          ></input>
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teamName: state.teamName,
    playerName: state.playerName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFormInput: (e) => dispatch(createTeamActions.getFormInput(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
