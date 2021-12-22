import { types } from '../const/types';

const initialState = {
    loading: false,
    heroes: [],
    hereoselected: {},
    error: ''
}

export const CalendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.SET_HEROES:

            return {
                ...state,
                loading: false,
                heroes: action.payload

            }
        case types.SET_HEREO_BY_ID:

            return {
                ...state,
                loading: false,
                hereoselected: action.payload
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