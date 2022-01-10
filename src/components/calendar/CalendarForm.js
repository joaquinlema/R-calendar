import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, deleteEvent, saveEditEvent } from '../../actions/CalendarActions';
import { closeModal } from '../../actions/ModalActions';

let schema = yup.object().shape({
    start: yup.date().max(yup.ref('end'), ({ max }) => `*Error en fecha debe ser menor qeu fecha final`).required('*Campo requerido'),
    end: yup.date().min(yup.ref('start'), ({ min }) => `*Error en fecha debe ser mayor qeu fecha inicial`).required('*Campo requerido'),
    title: yup.string().min(1, '*Titulo Debe tener algun valor').required('*Campo requerido'),
    notes: yup.string().min(1, '*Notes Debe tener algun valor').required('*Campo requerido')
});

export const CalendarForm = () => {

    const { noteSelected, isEditing, selectedDate } = useSelector(state => state.calendarReducer);
    const { uid, name } = useSelector(state => state.authReducer);

    const [formTitle, setformTitle] = useState('New Event');
    const dispatch = useDispatch();

    let defaultValues = (isEditing) ? noteSelected : {
        start: moment(selectedDate),
        end: moment(selectedDate).add('days', 1).minutes(0).seconds(0),
        title: '',
        notes: '',
        user: {
            name,
            uid
        }
    };

    useEffect(() => {
        if (isEditing) {
            setformTitle(`Edit Event ${noteSelected.title}`);
        }
    }, [isEditing, noteSelected.title]);

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues
    });

    const onSubmit = data => {

        if (isEditing) {
            dispatch(saveEditEvent(data));
        }
        else {
            dispatch(createEvent(data));
        }
        dispatch(closeModal());
    }

    const eliminar = () => {
        dispatch(deleteEvent(noteSelected.id));
        dispatch(closeModal());
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container">
            <h1> {formTitle} </h1>

            <div className="form-group">
                <label>Fecha y hora inicio</label>

                <Controller
                    control={control}
                    name='start'
                    {...register("start")}
                    render={({ field }) => (
                        <DateTimePicker
                            className="form-control"
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            value={moment(field.value).toDate()}
                        />
                    )}
                />

                <p className='form-text text-danger'>{errors.start?.message}</p>

            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>

                <Controller
                    control={control}
                    name='end'
                    {...register("end")}
                    render={({ field }) => (
                        <DateTimePicker
                            className="form-control"
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            value={moment(field.value).toDate()}
                        />
                    )}
                />

                <p className='form-text text-danger text-danger'>{errors.end?.message}</p>

            </div>

            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Título del evento"
                    autoComplete="off"
                    {...register("title")}
                />
                <p className='form-text text-danger'>{errors.title?.message}</p>

                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    {...register("notes")}
                ></textarea>
                <p className='form-text text-danger'>{errors.notes?.message}</p>

                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> {(isEditing) ? 'Editar' : 'Guardar'}</span>
            </button>

            {(isEditing) && <button
                type="button"
                className="btn btn-outline-secondary btn-block"
                onClick={eliminar}
            >
                <i className="far fa-delete"></i>
                <span> Borrar</span>
            </button>
            }
        </form>
    )
}
