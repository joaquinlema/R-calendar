import { put, call, takeLatest } from 'redux-saga/effects';
import { types } from '../../constants/types';
import { apiCall } from '../api';

export function* startLogin({ payload }) {

    const { email, password } = payload;

    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }
    try {
        const userInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/auth/`,
            option
        );

        if (userInfo.ok) {
            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('token-timestamp', (new Date()).getTime());

            yield put({ type: types.AUTH_LOGIN, payload: userInfo });
        } else {
            const errorMsj = `Error en login: ${userInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj })    
        }
    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* startRegister({ payload }) {

    const { name, email, password } = payload;

    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    }

    try {
        const userInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/auth/new`,
            option
        );

        if (userInfo.ok) {
            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('token-timestamp', (new Date()).getTime());
            yield put({ type: types.AUTH_LOGIN, payload: userInfo });

        } else {
            const errorMsj = `Error en register: ${userInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj })
        }


    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* checkLogUser() {
    const currToken = localStorage.getItem('token') || '';

    const option = {
        method: 'GET',
        headers: { 'x-token': currToken },
    }

    try {
        const userInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/auth/renew`,
            option
        );

        if (userInfo.ok) {
            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('token-timestamp', (new Date()).getTime());
            yield put({ type: types.AUTH_LOGIN, payload: userInfo });

        } else {
            const errorMsj = `Error en register: ${userInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj })    
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
    yield takeLatest(types.AUTH_CHECKING, checkLogUser);
}