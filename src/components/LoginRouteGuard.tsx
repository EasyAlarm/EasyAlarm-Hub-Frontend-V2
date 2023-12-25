import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../constants/urls';
import authService from '../services/authService';

type LoginRouteGuardProps = {
    children: ReactNode;
};

const LoginRouteGuard: React.FC<LoginRouteGuardProps> = ({ children }) =>
{
    const navigate = useNavigate();
    const isLoggedIn = authService.isAuthenticated();

    useEffect(() =>
    {
        if (isLoggedIn)
        {
            navigate(URLS.home);

        }
    }, [isLoggedIn, navigate]);

    if (isLoggedIn)
    {
        return null;
    }

    return <>{children}</>;
};

export default LoginRouteGuard;
