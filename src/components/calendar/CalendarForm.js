import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';

let schema = yup.object().shape({
    initialDate: yup.date().max(yup.ref('endDate'),({max}) => `*Error en fecha debe ser menor qeu fecha final` ).required('*Campo requerido'),
    endDate: yup.date().min(yup.ref('initialDate'),({min}) => `*Error en fecha debe ser mayor qeu fecha inicial` ).required('*Campo requerido'),
    title: yup.string().min(1,'*Titulo Debe tener algun valor').required('*Campo requerido'),
    notes: yup.string().min(1,'*Notes Debe tener algun valor').required('*Campo requerido')
});

const now = moment().minutes(0).seconds(0).toDate();
const end = moment().add('days', 1).minutes(0).seconds(0).toDate();

export const CalendarForm = () => {

    const { control, register, handleSubmit, formState:{ errors },getValues } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            initialDate: now,
            endDate: end,
            title: '',
            notes: ''
        }
      });

    const onSubmit = data => {
        
        console.log(data);

        //INFO: en teoria valida con el useForm(schema)
        // try {
        //     await schema.validate(formData);
        //     closeModal();
        // } catch (error) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: `${error.name}`,
        //         text: `${error.errors} `,
        //       })
        // }
    }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className="container">
        <h1> TITULO DEL FORM</h1>

        <div className="form-group">
            <label>Fecha y hora inicio</label>

            <Controller
                control={control}
                name='initialDate'
                {...register("initialDate")}
                render={({ field }) => (
                    <DateTimePicker
                        className="form-control"
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                        value={field.value}
                    />
                )}
            />

            <p className='form-text text-danger'>{errors.initialDate?.message}</p>
        
        </div>

        <div className="form-group">
            <label>Fecha y hora fin</label>

            <Controller
                control={control}
                name='endDate'
                {...register("endDate")}
                render={({ field }) => (
                    <DateTimePicker
                        className="form-control"
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                        value={field.value}
                        minDate={getValues("initialDate")}
                    />
                )}
            />

            <p className='form-text text-danger text-danger'>{errors.endDate?.message}</p>
        
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
            <span> Guardar</span>
        </button>
        
      </form>
    )
}
