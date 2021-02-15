import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import * as createTeamActions from "../../../store/actions/createTeamAct";
import classes from "./createTeam.module.css";
import Button from "../../UI/button/button";
import Select from "react-select";
import Layout from "../../../hoc/layout/layout";

const CreateTeam = (props) => {
  const { register, handleSubmit, errors, control, watch } = useForm();

  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();
  const [displayTable, setDisplayTable] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState();
  const [showCalender, setShowCalender] = useState("Hide");
  const [games, setGames] = useState([
    { id: 1, date: "", game: "" },
    { id: 2, date: "", game: "" },
    { id: 3, date: "", game: "" },
    { id: 4, date: "", game: "" },
    { id: 5, date: "", game: "" },
    { id: 6, date: "", game: "" },
    { id: 7, date: "", game: "" },
    { id: 8, date: "", game: "" },
  ]);
  const watchSelectedPlayers = watch("players");

  //updateing game dates in user input
  const gameDate = (e) => {
    let gamesUpdated = games.map((game) => {
      if (game.id == e.target.id) {
        return { id: game.id, date: e.target.value, game: game.game };
      }
      return game;
    });
    setGames(gamesUpdated);
  };

  //updateing game teams in user input
  const gameTeams = (e) => {
    let teamUpdated = games.map((game) => {
      if (game.id == e.target.id) {
        return { id: game.id, date: game.date, game: e.target.value };
      }
      return game;
    });

    setGames(teamUpdated);
  };

  const setPlay = () => {
    setShowCalender("Show");
  };

  const onSubmit = (data) => {
    // data.append(imagePreview);
    data.image = image;
    props.getFormInput(data);

    // props.openModal();
    // e.target.reset();
  };

  // hook to run once after componentDidUpdate
  useEffect(() => {
    props.getPlayers();
  }, []);

  useEffect(() => {
    setSelectedPlayers(watchSelectedPlayers);
  }, [watchSelectedPlayers]);

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
  imagePreview
    ? (imPreview = { display: "inline" })
    : (imPreview = { display: "none" });

  // console.log(selectedPlayers);
  let teamPlayers = "";
  if (selectedPlayers) {
    teamPlayers = (
      <div>
        <table className="table table-bordered">
          <tr>
            <th> </th>
            {games.map((game) => {
              return (
                <th>
                  {game.date} <br></br> {game.game}
                </th>
              );
            })}
          </tr>
          {selectedPlayers.map((player) => {
            console.log(selectedPlayers);
            return (
              <tr>
                <td>{player.label}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }

  return (
    <Layout>
      <div className={classes.Container}>
        <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
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
                onChange={(e) => {
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                  setImage(e.target.files[0]);
                }}
                ref={register({
                  required: {
                    value: true,
                  },
                })}
              />
              {<img src={imagePreview} alt="team preview" style={imPreview} />}
            </div>
          </div>
          <div className={classes.AddImage}>
            <label htmlFor="playerName">AJOUTER LES JOUEURS</label>
            <br></br>
            <Controller
              isMulti
              as={Select}
              options={options}
              name="players"
              id="players"
              control={control}
              ref={register({
                required: true,
              })}
            />
          </div>
          <div className={classes.AddCalendar}>
            <Button
              type="button"
              btnType={"MediumButton"}
              btn={"Open"}
              clicked={setPlay}
              disabled={!watchSelectedPlayers}
            >
              AJOUTER LE CALENDRIER
            </Button>
          </div>
          <div className={[classes["Table"], classes[showCalender]].join(" ")}>
            {props.games.map((game) => (
              <div>
                <input
                  type="text"
                  placeholder="Example: 01/01/1900"
                  id={game.id}
                  name={"date" + game.id}
                  ref={register({
                    required: {
                      value: true,
                    },
                  })}
                  onBlur={(e) => gameDate(e)}
                ></input>
                <input
                  type="text"
                  id={game.id}
                  name={"game" + game.id}
                  placeholder="Example: Meucon - St.Ave"
                  onBlur={(e) => gameTeams(e)}
                  ref={register({
                    required: {
                      value: true,
                    },
                  })}
                ></input>
              </div>
            ))}
          </div>
          <Button type="submit" btnType={"MediumButton"} btn={"Submit"}>
            Submit
          </Button>
        </form>
      </div>
      {teamPlayers}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.newTeam.players,
    toggleTable: state.newTeam.toggleTable,
    games: state.newTeam.games,
    // selectedPlayers: state.newTeam.selectedPlayers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFormInput: (data) => dispatch(createTeamActions.sendTeam(data)),
    getPlayers: () => dispatch(createTeamActions.getPlayers()),
    setDisplayTable: (value) => dispatch(createTeamActions.toggleTable(value)),
    // setImage: (image) => dispatch(createTeamActions.setImage(image)),
    // setSelectedPlayers: (players) =>
    //   dispatch(createTeamActions.setSelectedPlayer(players)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
