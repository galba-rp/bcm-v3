import * as actionTypes from "./actionTypes";

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
        modal: false
    }
}

export const openModal = () => {
    return {
        type: actionTypes.OPEN_MODAL,
        modal: true
    }
}
