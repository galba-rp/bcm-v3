import * as actionTypes from "./actionTypes";
import axios from "../../axios-bsm";

// export const setFormInput = (data) => {
//   let selectedPlayers = [];
//     data.players.map(player=> {
//       player = player.label.split(" ")

//       selectedPlayers.push({
//         name: player[1],
//         surname: player[0]
//       })


//     })
//    return {
//     type: actionTypes.SET_FORM_INPUT,
//     name: data.teamName,
//     file: data.image[0],
//     players: selectedPlayers
//   };
// };



export const sendTeam = (data) => {
  let selectedPlayers = [];
    data.players.map(player=> {
      player = player.label.split(" ")
      selectedPlayers.push({
        name: player[1],
        surname: player[0]
      })
    })
      data.players = selectedPlayers

  const formData = new FormData();
  formData.append("image", data.image)
  formData.append("teamName", data.teamName);
  formData.append("players", JSON.stringify(data.players));

      return (dispatch) => {
        axios
        .post("/create-team", formData, {
          headers: {
          "content-type": "multipart/form-data",
        },
      })
        .then (res => {
          console.log(res)
        })
        .catch(error => {
        console.log(error)
        })
      }

};

export const responseMessage = (response) => {
  return {
    type: actionTypes.API_RESPONSE,
    message: response,
  };
};

export const setPlayers = (data) => {
  return {
    type: actionTypes.SET_PLAYERS,
    players: data,
  };
};

export const getPlayers = () => {
  return (dispatch) => {
    axios
      .get("/get-players")
      .then((response) => {
        // console.log(response.data);
        dispatch(setPlayers(response.data));
      })
      .catch((error) => {
        dispatch(responseMessage("error"));
      });
  };
};

export const toggleTable = () => {
  return {
    type: actionTypes.TOGGLE_TABLE,
    value: true,
  };
};
// export const setImage = (image) => {
//   // console.log(image)
//   return {
//     type: actionTypes.SET_IMAGE,
//     file: image
//   }
// }