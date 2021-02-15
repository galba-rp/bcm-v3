import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  teamName: "",
  image: {},
  players: [],
  selectedPlayers: [{ label: "jhksgahfjks" }],
  message: "",
  toggleTable: false,
  games: [
    { id: 1, date: "", game: "" },
    { id: 2, date: "", game: "" },
    { id: 3, date: "", game: "" },
    { id: 4, date: "", game: "" },
    { id: 5, date: "", game: "" },
    { id: 6, date: "", game: "" },
    { id: 7, date: "", game: "" },
    { id: 8, date: "", game: "" },
  ],
};

// const setFormInfo = (state, action) => {
//   let value;
//   if (action.name === "image") {
//     value = action.file;
//   } else {
//     value = action.value;
//   }
//   const identifier = action.name;
//   const newFormInfo = { [identifier]: value };
//   const updateFormInfo = updateObject(state[identifier], newFormInfo);
//   const updatedState = { [identifier]: updateFormInfo };
//   return updateObject(state, updatedState);
// };

// const getPlayersFromApi = (state, action) => {
//   const playersUpdate = updateObject(state.players, action.players);
//   const updatedState = { players: playersUpdate };
//   console.log(updatedState);
//   return updateObject(state, updatedState);
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FORM_INPUT:
      console.log(action.file);
      return {
        ...state,
        image: { ...action.file },
        name: action.name,
        selectedPlayers: [...action.players],
      };
    // setFormInfo(state, action);
    case actionTypes.SET_PLAYERS:
      return {
        ...state,
        players: [...action.players],
      };
    case actionTypes.API_RESPONSE:
      return {
        ...state,
        message: action.message,
      };
    case actionTypes.TOGGLE_TABLE:
      console.log(action.value);
      return {
        ...state,
        toggleTable: action.value,
      };
    case actionTypes.SET_IMAGE:
      console.log(action.file);
      return {
        ...state,
        image: action.file,
      };
    case actionTypes.SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayers: action.players,
      };
    default:
      return state;
  }
};

export default reducer;
