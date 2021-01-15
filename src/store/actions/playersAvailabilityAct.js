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

export const selectPlayer = (vx, vy) => {
    return {
        type: actionTypes.PLAYER_AVAILABILITY,
        x: vx,
        y: vy
    }
}   