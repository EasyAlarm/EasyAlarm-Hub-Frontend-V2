/** @jsxImportSource @emotion/react */

import { LoadingButton } from "@mui/lab";
import { Container, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import queryKeys from "../../constants/queryKeys";
import { URLS } from "../../constants/urls";
import authService from "../../services/authService";
import { useStore } from "../../store/store";
import { ApiError } from "../../types/apiError";
import { login } from "./loginApi";
import { loginContainerStyles } from "./loginStyles";
import { LoginRequest } from "./loginTypes";
import { toast } from 'react-toastify';

export const Login: FC = () =>
{
    const navigate = useNavigate();

    const setUser = useStore((state) => state.setUser);

    const { handleSubmit, register, formState: { errors } } = useForm<LoginRequest>({
        mode: "onChange",
    });

    const { mutate: loginMutation, isLoading: isLoginLoading } = useMutation([queryKeys.auth.login],
        (loginRequest: LoginRequest) => login(loginRequest),
        {
            onSuccess: (loginResponse) =>
            {

                authService.setAccessToken(loginResponse.data!.accessToken);
                authService.setRefreshToken(loginResponse.data!.refreshToken);

                setUser(loginResponse.data!.user);

                navigate(URLS.home);
            },
            onError: (errorResponse: ApiError) =>
            {
                if (errorResponse.statusCode === 401) 
                {
                    toast.success("Invalid credentials");
                }
                else
                {
                    toast.error("Login failed");
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    {...register('username')}
                    error={Boolean(errors.username)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    {...register('password')}
                    error={Boolean(errors.password)}
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