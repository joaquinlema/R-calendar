import { types } from "../constants/types"

export const openModal = () => {
    return ({
        type: types.SET_MODAL_STATUS,
        payload: true
    })
}

export const closeModal = () => {
    return ({
        type: types.SET_MODAL_STATUS,
        payload: false
    })
}
