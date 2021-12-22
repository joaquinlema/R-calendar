import { combineReducers } from 'redux';
import { CalendarReducer } from './CalendarReducer';
import { modalReducer } from './ModalReducer';

export const rootReducers = combineReducers({
    calendarReducer: CalendarReducer,
    modalReducer: modalReducer
});