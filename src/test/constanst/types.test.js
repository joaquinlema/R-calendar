import '@testing-library/jest-dom';
import { types } from '../../constants/types';

describe('Pruebas de constants', () => {
    test('debe tener estos tipos', () => {
        expect(types).toEqual({
            SET_LOADING: 'SET_LOADING',
            SET_MODAL_STATUS: 'SET_MODAL_STATUS',
            GET_NOTES: 'GET_NOTES',
            SET_NOTE_EDIT: 'SET_NOTE_EDIT',
            SAVE_EDIT: 'SAVE_EDIT',
            SAVE_NEW: 'SAVE_NEW',
            DELETE_EVENT: 'DELETE_EVENT',
            SET_NEW_ITEM: 'SET_NEW_ITEM',
        });
    });

})
