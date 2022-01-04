import { types } from "../constants/types";

const initialState = {

    checking: true

}

export const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.AUTH_CHECKING_FINISH:

            return {

                ...state,

                checking: false

            }

        default:

            return state;

    }

}