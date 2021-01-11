import * as actionTypes from './actionTypes'

export const selectAvailability = (v) => {
    return {
        type: actionTypes.SELECT_AVAILABILITY,
        val: v
    }
}
export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export const openModal = (vx, vy) => {
    return {
        type: actionTypes.MODAL_STATE,
        x: vx,
        y: vy
    }
}   