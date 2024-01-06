import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginRouteGuard from "./components/LoginRouteGuard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { URLS } from "./constants/urls";
import { DashboardHome } from "./views/DashboardHome/DashboardHome";
import DashboardSettings from "./views/DashboardSettings/DashboardSettings";
import { DashboardUnits } from "./views/DashboardUnits/DashboardUnits";
import { Login } from "./views/Login/Login";

export const AppRoutes: FC = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={URLS.login} />} />

                <Route path={URLS.login} element={
                    <LoginRouteGuard>
                        <Login />
                    </LoginRouteGuard>
                } />

                <Route element={<ProtectedRoutes />}>
                    <Route path={URLS.home} element={<DashboardHome />} />
                </Route>

                <Route element={<ProtectedRoutes />}>
                    <Route path={URLS.units} element={<DashboardUnits />} />
                </Route>

                <Route element={<ProtectedRoutes />}>
                    <Route path={URLS.settings} element={<DashboardSettings />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};