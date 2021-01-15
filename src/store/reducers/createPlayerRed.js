import * as actionTypes from "../actions/actionTypes";

const initialState = {
  player: { name: "", surname: "", email: "", tel: "" },
  apiResponse: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_INFO:
      return {
        ...state,
        ...state.player,
        player: {
          [action.identifier]: action.value,
        },
      };
    case actionTypes.API_RESPONSE:
      return {
        ...state,
        apiResponse: action.message,
      };
    default:
      return state;
  }
};
export default reducer;
