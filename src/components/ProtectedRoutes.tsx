import { Navigate, Outlet } from "react-router-dom";
import { URLS } from "../constants/urls";
import authService from "../services/authService";

const ProtectedRoutes = () =>
{
    const isAuthenticated = authService.isAuthenticated();
    return isAuthenticated ? <Outlet /> : <Navigate to={URLS.login} />;
};

export default ProtectedRoutes;









