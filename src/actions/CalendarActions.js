import { types } from "../constants/types"

export const createEvent = (data) => {
    return ({
        type: types.SAVE_NEW,
        payload: data
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

export const setNewItem = () => {
    return ({
        type: types.SET_NEW_ITEM
    });
}