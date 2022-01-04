import { put, call, takeLatest } from 'redux-saga/effects';
import { types } from '../../constants/types';
import { apiCall } from '../api';

export function* startLogin({ payload }) {

    const { email, password } = payload;

    try {
        const results = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/auth/`,
            'POST',
            { "email": email, "password": password }
        );

        console.log(results);

        //        yield put({ type: types.SET_LOGIN_USER, payload: results });

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
    // yield takeLatest(types.GET_HEREO_BY_ID, postHeroes);
}