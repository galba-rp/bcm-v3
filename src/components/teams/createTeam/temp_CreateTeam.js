import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import * as createTeamActions from "../../../store/actions/createTeamAct";
import classes from "./createTeam.module.css";
import Button from "../../UI/button/button";
import Select from "react-select";

const CreateTeam = (props) => {
  const { register, handleSubmit, errors, control, setValue } = useForm();

  const onSubmit = (data) => {
    // data.append(imagePreview);
    data.image = props.image;
    props.getFormInput(data);

    // props.openModal();
    // e.target.reset();
  };

  // hook to run once after componentDidUpdate
  useEffect(() => {
    props.getPlayers();
  }, []);

  const onModalClose = () => {
    props.closeModal();
  };

  // converting players object to individual player object
  let val = 0;
  const options = [];
  props.players.map((player) => {
    options.push({ value: val++, label: player.surname + " " + player.name });
  });

  // setting varable to define cdisplay value in order ro show or hide image preview
  let imPreview;
  props.image
    ? (imPreview = { display: "inline" })
    : (imPreview = { display: "none" });
  let tableCompetition;

  if (props.toggleTable) {
    tableCompetition = (
      <table>
        <tr>
          {props.selectedPlayers.map((player) => {
            return <td>{player}</td>;

            // <td>{player.name}</td>
            // {player.games.map((game) => (
            //   <td
            //     key={player.id.toString() + game.id.toString()}
            //     onClick={() => this.onSelectPlayer(player.id, game.id)}
            //   >
            //     {game.game}
            //   </td>
          })}
        </tr>
      </table>
    );
  }

  return (
    <div className={classes.Container}>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="teamName"
          name="teamName"
          placeholder="Nom d'equipe"
          ref={register({
            required: {
              value: true,
            },
          })}
        ></input>
        <div className={classes.AddImage}>
          <label>AJOUTER UNE IMAGE</label>
          <div className={classes.Image}>
            <input
              type="file"
              title="Image has to be 150px*150px"
              name="file"
              id="file"
              onChange={(e) => props.setImage(e.target.files[0])}
              ref={register({
                required: {
                  value: true,
                },
              })}
            />
            {<img src={props.image} alt="team preview" style={imPreview} />}
          </div>
        </div>
        <div className={classes.AddImage}>
          <label htmlFor="playerName">AJOUTER LES JOUEURS</label>
          <br></br>
          <Controller
            isMulti
            render={({ onChange, value }) => (
              <Select
                options={options}
                id="players"
                onChange={(e) => {
                  onChange(e);
                  props.setSelectedPlayers(e);
                }}
                value={props.selectedPlayers}
                ref={register({
                  required: true,
                })}
              />
            )}
            name="players"
            control={control}
          />
        </div>
        <div className={classes.SelectedPlayers}>
          <ul>
            {props.selectedPlayers.map((player) => {
              return <li>{player}</li>;
            })}
          </ul>
        </div>
        <div className={classes.AddCalendar}>
          <Button
            type="button"
            btnType={"MediumButton"}
            btn={"Open"}
            clicked={() => props.setDisplayTable()}
          >
            AJOUTER LE CALENDRIER
          </Button>
        </div>
        <Button type="submit" btnType={"MediumButton"} btn={"Submit"}>
          Submit
        </Button>
      </form>
      {tableCompetition}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.newTeam.players,
    toggleTable: state.newTeam.toggleTable,
    image: state.newTeam.image,
    selectedPlayers: state.newTeam.selectedPlayers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFormInput: (data) => dispatch(createTeamActions.sendTeam(data)),
    getPlayers: () => dispatch(createTeamActions.getPlayers()),
    setDisplayTable: (value) => dispatch(createTeamActions.toggleTable(value)),
    setImage: (image) => dispatch(createTeamActions.setImage(image)),
    setSelectedPlayers: (e) =>
      dispatch(createTeamActions.setSelectedPlayer(e.label)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
