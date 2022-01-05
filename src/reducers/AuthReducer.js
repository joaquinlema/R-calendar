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
        case types.AUTH_LOGIN:
            let { uid, name } = action.payload;

            return {
                ...state,
                checking: false,
                uid,
                name
            }
        default:
            return state;
    }
}