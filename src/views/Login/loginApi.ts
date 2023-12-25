import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { LoginRequest, LoginResponse } from "./loginTypes";

export const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    const res = await axiosClient.post(ENDPOINTS.auth.login, loginRequest);
    return res.data;
}