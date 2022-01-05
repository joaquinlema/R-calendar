import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { startLogin, startRegister } from '../../actions/AuthActions';
import { useForm } from '../../hooks/useForm';
import '../../styles/login.css';

//TODO: VALIDACIONES DE CADA ATRIBUTO
export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.authReducer);

    const initialForm = {
        login_email: 'joaco.lema@hotmail.com',
        login_password: 123456,
        reg_name: '',
        reg_email: '',
        reg_pass: '',
        reg_rep_pass: '',
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const {
        login_email,
        login_password,
        reg_name,
        reg_email,
        reg_pass,
        reg_rep_pass,
    } = formValues;

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(login_email, login_password.toString()));
        reset();
    }

    const handleSubmitReg = (e) => {
        e.preventDefault();

        if (reg_pass !== reg_rep_pass) {
            alert('ops contraseñas no coinciden');
            return false;
        }

        dispatch(startRegister(
            reg_name,
            reg_email,
            reg_pass,
        ));

        reset();
    }

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (!!uid) {
            navigate(from, { replace: true });
        }

    }, [from, navigate, uid]);

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleSubmitLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='login_email'
                                value={login_email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='login_password'
                                value={login_password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleSubmitReg}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='reg_name'
                                value={reg_name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='reg_email'
                                value={reg_email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='reg_pass'
                                value={reg_pass}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='reg_rep_pass'
                                value={reg_rep_pass}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}