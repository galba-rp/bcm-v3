import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../../components/UI/modal/modal";
import * as actionCreators from "../../../store/actions/index";

class Team extends Component {
  componentDidMount() {
    console.log("TEAMS did mount");
    const myKey = this.props.match.params.teamId;
    console.log(myKey);
  }

  render() {
    console.log(this.props.modal);
    const players = this.props.players.map((player, id) => {
      return (
        <tr key={"player" + id}>
          <td>{player.name}</td>
          {player.games.map((game) => (
            <td
              key={player.id.toString() + game.id.toString()}
              onClick={() => this.props.onModalState(player.id, game.id)}
            >
              {game.game}
            </td>
          ))}
        </tr>
      );
    });

    return (
      <div>
        <Modal
          show={this.props.modal.state}
          close={this.props.onModalclose}
          choose={(val) => this.props.onPlaying(val)}
        />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Players</th>
              {this.props.dts.map((dt) => {
                return (
                  <th key={33 * dt.id}>
                    {dt.date} <p>{dt.game}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>{players}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.players.playing,
    modal: state.players.modal,
    players: state.players.players,
    dts: state.players.dts,
  };
};

const maspDispatchToProps = (dispatch) => {
  return {
    onModalState: (player, game) =>
      dispatch(actionCreators.openModal(player, game)),
    onModalclose: () => dispatch(actionCreators.closeModal()),
    onPlaying: (val) => dispatch(actionCreators.selectAvailability(val)),
  };
};

export default connect(mapStateToProps, maspDispatchToProps)(Team);
