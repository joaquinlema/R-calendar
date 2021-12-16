import React from 'react';

export const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                joaquin
            </span>

            <button type="button" className="btn btn-outline-primary">
                <i className="fas fa-sign"></i>
                <span> SALIR</span>
            </button>
        </div>
    )
}
