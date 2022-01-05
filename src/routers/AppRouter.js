import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { checkUserLogin } from '../actions/AuthActions';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.authReducer);

    useEffect(() => {
        dispatch(checkUserLogin());
    }, [dispatch]);

    if (checking) return (<h2>Cargando ...</h2>);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/" element={<RequireAuth isAuth={!!uid} />} >
                    <Route path="" element={<CalendarScreen />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
