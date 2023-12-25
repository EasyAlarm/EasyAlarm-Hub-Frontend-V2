import { createContext, useContext, useState, ReactNode, SyntheticEvent, FC } from 'react';
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';

export enum AlertType
{
    Success = "success",
    Error = "error",
    Info = "info"
}

interface AlertContextProps
{
    alert: (message: string, type: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps>({
    alert: () => { }
});

export const useAlert = () => useContext(AlertContext);

export const AlertProvider: FC<{ children: ReactNode; }> = ({ children }) =>
{
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState<AlertType>(AlertType.Success);

    const alert = (msg: string, type: AlertType) =>
    {
        setMessage(msg);
        setAlertType(type);
        setOpen(true);
    };

    const handleCloseSnackbar = (
        event: SyntheticEvent<Element, Event> | Event,
        reason: SnackbarCloseReason
    ) =>
    {
        if (reason === 'clickaway')
        {
            return;
        }
        setOpen(false);
    };

    const handleCloseAlert = () =>
    {
        setOpen(false);
    };

    return (
        <AlertContext.Provider value={{ alert }}>
            {children}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseAlert} severity={alertType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
    );
};
