import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from "./loginTypes";

export const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => 
{
    const res = await axiosClient.post(ENDPOINTS.auth.login, loginRequest);
    return res.data;
}

export const refresh = async (refreshTokenRequest: RefreshTokenRequest): Promise<RefreshTokenResponse> =>
{
    const res = await axiosClient.post(ENDPOINTS.auth.refresh, refreshTokenRequest);
    return res.data;
}