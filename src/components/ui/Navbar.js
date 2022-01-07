import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkOutUser } from '../../actions/AuthActions';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.authReducer);
    let navigate = useNavigate();

    const checkout = () => {
        dispatch(checkOutUser());
        navigate('/login');
    }

    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                {name}
            </span>

            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={checkout}
            >
                <i className="fas fa-sign"></i>
                <span> SALIR</span>
            </button>
        </div>
    )
}
