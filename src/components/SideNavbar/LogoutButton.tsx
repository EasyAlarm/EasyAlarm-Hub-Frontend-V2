import { Button } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import authService from '../../services/authService';

type LogoutButtonProps = {
    title: string;
    className?: string;
};

export const LogoutButton: FC<LogoutButtonProps> = ({ title = "logout", className }) =>
{
    const navigate = useNavigate();

    const onLogoutButtonClick = () =>
    {
        authService.removeRefreshToken();
        authService.removeAccessToken();
        navigate(URLS.login);
    };

    return (
        <Button
            className={className}
            variant="contained"
            size="large"
            onClick={onLogoutButtonClick}
        >
            {title}
        </Button>
    );
};
