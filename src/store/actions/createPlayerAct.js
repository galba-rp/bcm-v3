import * as actionTypes from "./actionTypes";
import axios from "../../axios-bsm";


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
                dispatch(responseMessage('Jouer enregistrer'))
            })
            .catch((error) => {
                dispatch(responseMessage('error'))
            })  
    }
}
