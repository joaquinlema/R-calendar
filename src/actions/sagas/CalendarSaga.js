import { put, call, takeLatest } from 'redux-saga/effects';
import { types } from '../../constants/types';
import { apiCall } from '../api';

export function* saveNewItem({ payload }) {

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-token': localStorage.getItem('token')
        },
        body: JSON.stringify(payload)
    }

    try {
        const eventNewInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/events/`,
            option
        );

        if (eventNewInfo.ok) {
            yield put({ type: types.SAVE_NEW_FINISH, payload: eventNewInfo });
        } else {
            const errorMsj = `Error en crearEvent: ${eventNewInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj });
        }

    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* updateItem({ payload }) {

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-token': localStorage.getItem('token')
        },
        body: JSON.stringify(payload)
    }

    try {
        const eventUpdateInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/events/${payload.id}`,
            option
        );

        if (eventUpdateInfo.ok) {
            yield put({ type: types.SAVE_EDIT_FINISH, payload: eventUpdateInfo });
        } else {
            const errorMsj = `Error en updateEvent: ${eventUpdateInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj });
        }

    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* deleteItem({ payload }) {

    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-token': localStorage.getItem('token')
        },
    }

    try {
        const deleteDataInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/events/${payload.id}`,
            option
        );

        if (deleteDataInfo.ok) {
            yield put({ type: types.DELETE_EVENT_FINISH, payload: deleteDataInfo });

        } else {
            const errorMsj = `Error en deleteData: ${deleteDataInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj })
        }

    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* getCalendarEvents({ payload }) {

    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-token': localStorage.getItem('token')
        }
    }

    try {
        const allEventsInfo = yield call(
            apiCall,
            `${process.env.REACT_APP_API_URL}/events/`,
            option
        );

        if (allEventsInfo.ok) {
            yield put({ type: types.GET_NOTES_FINISH, payload: allEventsInfo });

        } else {
            const errorMsj = `Error en deleteData: ${allEventsInfo.msg}`;
            console.log(errorMsj);
            yield put({ type: types.SET_ERROR, payload: errorMsj })
        }

    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        console.log(errorMsj);
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export default function* calendarSaga() {
    yield takeLatest(types.SAVE_NEW, saveNewItem);
    yield takeLatest(types.SAVE_EDIT, updateItem);
    yield takeLatest(types.DELETE_EVENT, deleteItem);
    yield takeLatest(types.GET_NOTES, getCalendarEvents);
}