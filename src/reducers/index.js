import { combineReducers } from 'redux';
import { CalendarReducer } from './CalendarReducer';

export const rootReducers = combineReducers({
    calendarReducer: CalendarReducer
});