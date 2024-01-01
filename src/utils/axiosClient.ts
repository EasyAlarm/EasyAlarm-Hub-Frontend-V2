import axios from 'axios';
import authService from '../services/authService';
import { ApiError } from '../types/apiError';
import { refresh } from '../views/Login/loginApi';

const axiosClient = axios.create({

    baseURL: process.env.REACT_APP_API_BASE_URL, 
});

axiosClient.interceptors.request.use(
    config => 
    {
        const token = authService.getAccessToken();

        if (token) 
        {
            config.headers['x-auth-token'] = token;
        }
        
        return config;
    },
    error => 
    {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) 
        {
            originalRequest._retry = true;
            try 
            {
                const refreshToken = authService.getRefreshToken();
                
                if(!refreshToken)
                {
                    return Promise.reject(error);
                }

                const response = await refresh({"refreshToken": refreshToken});
                
                if (response.status === 200 && response.data) 
                {
                    authService.setAccessToken(response.data.accessToken);
                    authService.setRefreshToken(response.data.refreshToken);

                    axios.defaults.headers.common['x-auth-token'] = response.data.accessToken;
                    return axiosClient(originalRequest);
                }
                
            } 
            catch (refreshError) 
            {
                authService.removeAccessToken();
                authService.removeRefreshToken();
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

const isApiError = (error: unknown): error is ApiError => 
{
    return (error as ApiError).message !== undefined && (error as ApiError).statusCode !== undefined && (error as ApiError).errorCode !== undefined;
}

axiosClient.interceptors.response.use(null, error => {
    if (axios.isAxiosError(error) && error.response) 
    {
        console.log(error.response);
        const apiError = error.response.data as ApiError;
        apiError.statusCode = error.response.status;

        if(isApiError(apiError)) 
        {
            return Promise.reject(apiError);
        }

        return Promise.reject(error);
    }
})

export default axiosClient;
