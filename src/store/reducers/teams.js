import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEAMS_INFO:
      return {
        ...state,
        cards: [
          ...action.data.map((team) => {
            return {
              id: team.id,
              name: team.name,
              img: team.img,
            };
          }),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
