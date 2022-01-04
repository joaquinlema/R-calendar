import { types } from "../constants/types"

export const startLogin = (email, password) => {
    return ({
        type: types.AUTH_START_LOGIN,
        payload: { email, password }
    });
}