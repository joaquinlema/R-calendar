import { types } from "../constants/types"

export const openModal = () => dispatch => {
    dispatch({
        type: types.SET_MODAL_STATUS,
        payload: true
    })
}

export const closeModal = () => dispatch => {
    dispatch({
        type: types.SET_MODAL_STATUS,
        payload: false
    })
}
