import { all } from 'redux-saga/effects';
import calendarSaga from './CalendarSaga';

//permite ejecutar los watchers de todas las sagas
export default function* rootSaga() {
    yield all([
        calendarSaga()
        // heroes(),
        // laotrasaga
    ]);
}