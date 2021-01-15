import * as actionTypes from "./actionTypes";
import axios from "../../axios-bsm";

export const  getFormInput = (event) => {
    let imageFile = "";
    if(event.target.files !== null){
        imageFile =event.target.files[0];
    }
    return {
        type: actionTypes.GET_FORM_INPUT,
        value: event.target.value,
        name: event.target.name,
        file: imageFile
    }
}