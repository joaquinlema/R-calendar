import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { types } from '../../constants/types';
import { closeModal, openModal } from '../../actions/ModalActions';

const mockStore = configureStore();

const initState = {
    open: true
};

let store = mockStore(initState);

describe('pruebas de ModalActions', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('should open modal', () => {

        const openModalAction = openModal();

        expect(openModalAction).toEqual({
            type: types.SET_MODAL_STATUS,
            payload: true
        });

    })

    test('should close modal', () => {

        const closeModalAction = closeModal();

        expect(closeModalAction).toEqual({
            type: types.SET_MODAL_STATUS,
            payload: false
        });
    })

});
