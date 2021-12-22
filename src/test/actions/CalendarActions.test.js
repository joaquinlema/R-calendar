import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { types } from '../../constants/types';
import moment from 'moment';
import { deleteEvent, saveEditEvent, setNewItem, createEvent, setEditEvent } from '../../actions/CalendarActions';

const mockStore = configureStore();

const initState = {
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
};

let store = mockStore(initState);

describe('Pruebas de CalendarActions', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('should create event', () => {

        let newEvent = {
            title: 'test 1',
            start: moment().toDate(),
            end: moment().add(2, 'days').toDate(),
            bgcolor: 'blue',
            user: {
                name: 'joaquin',
                uid: 123
            }
        }
        const createEventAction = createEvent(newEvent);

        expect(createEventAction).toEqual({
            type: types.SAVE_NEW,
            payload: newEvent
        });
    })

    test('should set edit event', () => {
        let editEvent = {
            id: 1,
            title: 'test 1',
            start: moment().toDate(),
            end: moment().add(2, 'days').toDate(),
            bgcolor: 'blue',
            user: {
                name: 'joaquin',
                uid: 123
            }
        }
        const editEventAction = setEditEvent(editEvent);

        expect(editEventAction).toEqual({
            type: types.SET_NOTE_EDIT,
            payload: editEvent
        });
    });

    test('should saveEditEvent', () => {
        let saveEditEventElem = {
            id: 2,
            title: 'test 1',
            start: moment().toDate(),
            end: moment().add(2, 'days').toDate(),
            bgcolor: 'blue',
            user: {
                name: 'joaquin',
                uid: 123
            }
        }

        const saveEditEventAction = saveEditEvent(saveEditEventElem);

        expect(saveEditEventAction).toEqual({
            type: types.SAVE_EDIT,
            payload: saveEditEventElem
        });
    });

    test('should deleteEvent', () => {
        const id = 1;
        const deleteEventAction = deleteEvent(1);

        expect(deleteEventAction).toEqual({
            type: types.DELETE_EVENT,
            payload: id
        });
    });

    test('should setNewItem', () => {

        const setNewEventAction = setNewItem();

        expect(setNewEventAction).toEqual({
            type: types.SET_NEW_ITEM
        });
    });

})
