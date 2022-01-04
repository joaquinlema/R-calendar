import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';
import { CalendarReducer } from './CalendarReducer';
import { modalReducer } from './ModalReducer';

export const rootReducers = combineReducers({
    calendarReducer: CalendarReducer,
    modalReducer: modalReducer,
    authReducer: AuthReducer
});