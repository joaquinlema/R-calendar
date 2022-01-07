import { types } from "../constants/types"

export const startLogin = (email, password) => {
    return ({
        type: types.AUTH_START_LOGIN,
        payload: { email, password }
    });
}

export const startRegister = (name, email, password) => {
    return ({
        type: types.AUTH_START_REGISTER,
        payload: { name, email, password }
    });
}

export const checkUserLogin = () => {
    return ({
        type: types.AUTH_CHECKING
    });
}

export const checkOutUser = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('token-timestamp');

    return ({
        type: types.AUTH_LOGOUT
    });
}