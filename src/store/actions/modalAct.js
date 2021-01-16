import * as actionTypes from "./actionTypes";

export const closeModal = (id) => {
    return {
        type: actionTypes.CLOSE_MODAL,
        modal: false,
        identifier: id
    }
}

export const openModal = () => {
    return {
        type: actionTypes.OPEN_MODAL,
        modal: true
    }
}
