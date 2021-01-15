import * as actionTypes from "./actionTypes";
import axios from "../../axios-bsm";

export const setTeamInfo = (data) => {
  return {
    type: actionTypes.SET_TEAMS_INFO,
    data: data,
  };
};

export const getTeamsInfo = () => {
  return (dispatch) => {
    axios
      .get("/teams")
      .then((response) => {
        dispatch(setTeamInfo(response.data));
      })
      .catch((error) => console.log(error));
  };
};
