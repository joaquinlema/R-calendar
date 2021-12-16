import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import '../../styles/modal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).toDate();
const end = moment().add('days', 1).minutes(0).seconds(0).toDate();
let schema = yup.object().shape({
    initialDate: yup.date().max(yup.ref('endDate'),({max}) => `Error en fecha debe ser menor qeu fecha final}` ).required(),
    endDate: yup.date().min(yup.ref('initialDate'),({min}) => `Error en fecha debe ser mayor qeu fecha inicial}` ).required(),
    title: yup.string().min(1,'Titulo Debe tener algun valor').required(),
    notes: yup.string().min(1,'Notes Debe tener algun valor').required()
});

export const CalendarModal = () => {

    const [modalIsOpen, setIsOpen] = React.useState(true);
    const [initialDate, setinitialDate] = useState(now);
    const [endDate, setendDate] = useState(end);

    const titleRef = useRef('');
    const notesRef = useRef('');

    // const openModal = () => {
    //     setIsOpen(true);
    // }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        let formData = {
            initialDate:initialDate,
            endDate:endDate,
            title:titleRef.current.value,
            notes:notesRef.current.value
        }
        
        try {
            await schema.validate(formData);
            closeModal();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: `${error.name}`,
                text: `${error.errors} `,
              })
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmit}
                
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={(e) => setinitialDate(e)}
                        value={initialDate}
                        name='initialDate'
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={(e) => setendDate(e)}
                        value={endDate}
                        minDate={initialDate}
                        name='endDate'
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        ref={titleRef}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        ref={notesRef}
                    ></textarea>
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
        </Modal>
    )
}
