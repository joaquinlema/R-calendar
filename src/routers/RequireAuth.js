import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth({ isAuth }) {
    let isAuthenticated = isAuth;
    let location = useLocation();

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />;
}