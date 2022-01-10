import { types } from "../constants/types"

export const createEvent = (data) => {
    return ({
        type: types.SAVE_NEW,
        payload: data
    });
}

export const getAllEvent = (data) => {
    return ({
        type: types.GET_NOTES,
    });
}

export const setEditEvent = (data) => {
    return ({
        type: types.SET_NOTE_EDIT,
        payload: data
    });
}

export const saveEditEvent = (data) => {
    return ({
        type: types.SAVE_EDIT,
        payload: data
    });
}

export const deleteEvent = id => {
    return ({
        type: types.DELETE_EVENT,
        payload: id
    });
}

export const setNewItem = (date) => {
    return ({
        type: types.SET_NEW_ITEM,
        payload: date
    });
}