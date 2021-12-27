import moment from "moment";
import { types } from "../../constants/types";
import { CalendarReducer } from "../../reducers/CalendarReducer";

describe('Prueba de CalendarReducer', () => {

    test('should set loading to true', () => {
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

        const action = {
            type: types.SET_LOADING
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
            loading: true
        });

    });

    test('debe setear la nota a editar tomando una nota como valor', () => {
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

        const action = {
            type: types.SET_NOTE_EDIT,
            payload: initState.notes[0]
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
            noteSelected: action.payload,
            isEditing: true
        });

    });

    test('debe actualizar la nota seleccionada', () => {
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

        let elemEdit = {
            id: 1,
            title: 'test edit',
            start: moment().toDate(),
            end: moment().add(2, 'days').toDate(),
            bgcolor: 'blue',
            user: {
                name: 'joaquin',
                uid: 123
            }
        };

        const action = {
            type: types.SAVE_EDIT,
            payload: elemEdit
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
            notes: [{
                id: 1,
                title: 'test edit',
                start: moment().toDate(),
                end: moment().add(2, 'days').toDate(),
                bgcolor: 'blue',
                user: {
                    name: 'joaquin',
                    uid: 123
                }
            }],
            isEditing: false
        });

    });

    test('debe agregar un nuevo elemento al listado de notes', () => {
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

        let elemNew = {
            id: 2,
            title: 'test',
            start: moment().toDate(),
            end: moment().add(2, 'days').toDate(),
            bgcolor: 'blue',
            user: {
                name: 'joaquin',
                uid: 123
            }
        }

        const action = {
            type: types.SAVE_NEW,
            payload: elemNew
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
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
            }, elemNew],
            isEditing: false
        });

    });

    test('debe obtener el listado de notes', () => {
        const initState = {
            loading: false,
            notes: [],
            error: '',
            noteSelected: {},
            isEditing: false
        };

        const notesGet = [{
            id: 1,
            title: 'test',
            start: moment().toDate(),
            end: moment().add(2, 'days').toDate(),
            bgcolor: 'blue',
            user: {
                name: 'joaquin',
                uid: 123
            }
        }]

        const action = {
            type: types.GET_NOTES,
            payload: notesGet
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
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
            }]
        });

    });

    test('debe disparar mensaje de error', () => {
        const initState = {
            loading: false,
            notes: [],
            error: '',
            noteSelected: {},
            isEditing: false
        };

        const action = {
            type: types.SET_ERROR,
            payload: 'Error'
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
            error: 'Error'
        });

    });

    test('debe eliminar la nota seleccionada', () => {
        const initState = {
            loading: false,
            notes: [{ id: 1 }, { id: 2 }],
            error: '',
            noteSelected: {},
            isEditing: false
        };

        const elemDelete = 1;

        const action = {
            type: types.DELETE_EVENT,
            payload: elemDelete
        };

        const state = CalendarReducer(initState, action);

        expect(state).toEqual({
            ...initState,
            notes: [{ id: 2 }]
        });

    });

})
