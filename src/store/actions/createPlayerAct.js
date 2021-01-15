import * as actionTypes from "./actionTypes";
import axios from "../../axios-bsm";

export const  setPlayerInfo = (event) => {
    return {
        type: actionTypes.SET_PLAYER_INFO,
        identifier: event.target.id,
        value: event.target.value,
    }
}
export const  responseMessage = (response) => {
    return {
        type: actionTypes.API_RESPONSE,
        message: response
    }
}

export const sendPlayerInfo = (info) => {
    return  (dispatch) => {
        axios 
            .post("/create-player", info)
            .then ((response) => {
                console.log(response)
                dispatch(responseMessage(true))
            })
            .catch((error) => console.log(error));
    }
}

