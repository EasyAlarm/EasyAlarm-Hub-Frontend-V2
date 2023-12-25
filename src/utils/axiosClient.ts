import axios from 'axios';
import authService from '../services/authService';

const axiosClient = axios.create({

    baseURL: process.env.REACT_APP_API_BASE_URL, 
});

axiosClient.interceptors.request.use(
    config => {
        const token = authService.getToken();

        if (token) {
            config.headers['x-auth-token'] = token;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosClient;
