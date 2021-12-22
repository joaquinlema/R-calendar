import React from 'react';
import Modal from 'react-modal';
import { CalendarForm } from './CalendarForm';
import '../../styles/modal.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/ModalActions';

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

    const {open} = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeModal())
    }

    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
           <CalendarForm />
        </Modal>
    )
}
