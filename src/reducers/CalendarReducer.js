import moment from 'moment';
import { types } from '../constants/types';

const initialState = {
    loading: false,
    notes: [{
        title: 'test',
        start: moment().toDate(),
        end: moment().add(2, 'days').toDate(),
        bgcolor: 'blue',
        user: {
            name: 'joaquin',
            uid: 123
        }
    }],
    error: ''
}

export const CalendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.GET_NOTES:
            return {
                ...state,
                loading: false,
                notes: action.payload
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:

            return state;

    }

}