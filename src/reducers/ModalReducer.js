import { types } from "../constants/types";

const initialState = {
    open: true
}

export const modalReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.SET_MODAL_STATUS:

            return {
                ...state,
                open: action.payload
            }

        default:

            return state;

    }

}