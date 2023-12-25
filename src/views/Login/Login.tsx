/** @jsxImportSource @emotion/react */

import { LoadingButton } from "@mui/lab";
import { Container, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import queryKeys from "../../constants/queryKeys";
import { URLS } from "../../constants/urls";
import { AlertType, useAlert } from "../../context/AlertContext";
import authService from "../../services/authService";
import { login } from "./loginApi";
import { loginContainerStyles } from "./loginStyles";
import { LoginRequest } from "./loginTypes";

export const Login: FC = () =>
{
    const { alert } = useAlert();
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<LoginRequest>({
        mode: "onChange",
    });

    const { mutate: loginMutation, isLoading: isLoginLoading } = useMutation([queryKeys.auth.login],
        (loginRequest: LoginRequest) => login(loginRequest),
        {
            onSuccess: (loginResponse) =>
            {
                authService.setToken(loginResponse.data!.token);

                navigate(URLS.home);
            },
            onError: (errorResponse: AxiosError) =>
            {
                if (errorResponse.response?.status === 401) 
                {
                    alert("Invalid credentials", AlertType.Error);
                }
                else
                {
                    alert("Login failed", AlertType.Error);
                }
            }

        }
    );

    return (
        <Container css={loginContainerStyles} component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Authentication
            </Typography>
            <form onSubmit={handleSubmit((formData) => { loginMutation(formData); })}>
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Username required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            autoFocus
                            error={Boolean(errors.username)}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Password required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            error={Boolean(errors.password)}
                        />
                    )}
                />
                <LoadingButton
                    loading={isLoginLoading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </LoadingButton>
            </form>
        </Container>
    );
};