import * as actionTypes from "../actions/actionTypes";

const initialState = {
  apiResponse: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
