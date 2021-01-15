import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  teamName: "",
  image: "",
  players: [{ name: "" }],
};

const getFormInfo = (state, action) => {
  let value;
  if (action.name === "image") {
    value = action.file;
  } else {
    value = action.value;
  }
  const identifier = action.name;
  const newFormInfo = { [identifier]: value };
  const updateFormInfo = updateObject(state[identifier], newFormInfo);
  const updatedState = { [identifier]: updateFormInfo };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FORM_INPUT:
      return getFormInfo(state, action);
    default:
      return state;
  }
};

export default reducer;
