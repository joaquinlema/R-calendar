import React from 'react';
import Modal from 'react-modal';
import { CalendarForm } from './CalendarForm';
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

export const CalendarModal = () => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    //INFO: ESTAS FUNCIONES DEL MODAL VANA APASAR A REDUX
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
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
           <CalendarForm />
        </Modal>
    )
}
