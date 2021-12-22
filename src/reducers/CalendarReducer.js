import moment from 'moment';
import { types } from '../constants/types';

const initialState = {
    loading: false,
    notes: [{
        id: 1,
        title: 'test',
        start: moment().toDate(),
        end: moment().add(2, 'days').toDate(),
        bgcolor: 'blue',
        user: {
            name: 'joaquin',
            uid: 123
        }
    }],
    error: '',
    noteSelected: {},
    isEditing: false
}

export const CalendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.SET_NOTE_EDIT:
            return {
                ...state,
                //INFO: ver que carajo devuelve como evento
                noteSelected: action.payload,
                isEditing: true
            }
        case types.SAVE_EDIT:
            return {
                ...state,
                isEditing: false,
                notes: state.notes.map(elem => (elem.id === action.payload.id) ? action.payload : elem)
            }
        case types.SAVE_NEW:

            return {
                ...state,
                notes: [...state.notes, action.payload],
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
        case types.DELETE_EVENT:
            return {
                ...state,
                notes: state.notes.filter(elem => elem.id !== action.payload)
            }
        case types.SET_NEW_ITEM:
            return {
                ...state,
                isEditing: false
            }
        default:

            return state;

    }

}