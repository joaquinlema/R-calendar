import { types } from "../../constants/types";
import { modalReducer } from "../../reducers/ModalReducer";

describe('Prubeas modal reducer', () => {

    test('debe actualizar para abrir el modal', () => {
        const initState = {
            open: true
        };

        const action = {
            type: types.SET_MODAL_STATUS,
            payload: true
        };

        const state = modalReducer(initState, action);

        expect(state).toEqual({
            open: true
        });

    });

    test('debe actualizar para cerrar el modal', () => {
        const initState = {
            open: true
        };

        const action = {
            type: types.SET_MODAL_STATUS,
            payload: false
        };

        const state = modalReducer(initState, action);

        expect(state).toEqual({
            open: false
        });

    });

    test('debe devolver el state como este', () => {

        const initState = {
            open: true
        };

        const action = {
            type: 'nada',
            payload: false
        };

        const state = modalReducer(initState, action);

        expect(state).toEqual({
            open: true
        });

    });
});
