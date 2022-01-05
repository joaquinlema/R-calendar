import { put, call, takeLatest } from 'redux-saga/effects';
import { types } from '../../constants/types';
import { apiCall } from '../api';

export function* startLogin({ payload }) {

    const { email, password } = payload;

    try {
        const userInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/auth/`,
            'POST',
            { "email": email, "password": password }
        );

        if (userInfo.ok) {
            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('token-timestamp', (new Date()).getTime());

            yield put({ type: types.AUTH_LOGIN, payload: userInfo });
        }


    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* startRegister({ payload }) {

    const { name, email, password } = payload;

    try {
        const userInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/auth/new`,
            'POST',
            { name, email, password }
        );

        if (userInfo.ok) {
            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('token-timestamp', (new Date()).getTime());

            yield put({ type: types.AUTH_LOGIN, payload: userInfo });
        }


    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}
//watcher de redux saga
//toma como parametro la nombre de la accion que se ejecuta y el metodo a ejecutar
export default function* authSaga() {
    yield takeLatest(types.AUTH_START_LOGIN, startLogin);
    yield takeLatest(types.AUTH_START_REGISTER, startRegister);
}