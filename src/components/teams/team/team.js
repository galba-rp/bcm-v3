import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../../components/UI/modal/modal";
import * as actionCreators from "../../../store/actions/index";
import Button from "../../UI/button/button";

class Team extends Component {
  componentDidMount() {
    const myKey = this.props.match.params.teamId;
    console.log(myKey);
  }
  onSelectPlayer = (player,game) => {
    this.props.openModal();
    this.props.selectPlayer(player, game)
  }

  render() {
    const players = this.props.players.map((player, id) => {
      return (
        <tr key={"player" + id}>
          <td>{player.name}</td>
          {player.games.map((game) => (
            <td
              key={player.id.toString() + game.id.toString()}
              onClick={() => this.onSelectPlayer(player.id, game.id)}
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
          show={this.props.modal}
          close={this.props.onModalclose}
          choose={(val) => this.props.onPlaying(val)}
          messageId={"team"}
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
        <Button btnType={"MediumButton"} disabled={false}>
          Sauvegarder
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.players.playing,
    modal: state.modal.modal,
    players: state.players.players,
    dts: state.players.dts,
  };
};

const maspDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player, game) =>
    dispatch(actionCreators.selectPlayer(player, game)),
    openModal: () => dispatch(actionCreators.openModal()),
    onModalclose: () => dispatch(actionCreators.closeModal()),
    onPlaying: (val) => dispatch(actionCreators.selectAvailability(val)),
  };
};

export default connect(mapStateToProps, maspDispatchToProps)(Team);
