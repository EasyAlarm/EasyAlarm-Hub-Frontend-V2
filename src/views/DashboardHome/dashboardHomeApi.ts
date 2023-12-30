import { AxiosResponse } from "axios";
import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { HubStatusResponse } from "./dashboardHomeTypes";

export const getHubStatus = async (): Promise<HubStatusResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.hub.status);
    return res.data;
};

export const armHub = async (profile: string): Promise<AxiosResponse> =>
{
    const res = await axiosClient.post(`${ENDPOINTS.hub.arm}/${profile}`);
    return res.data;
};

export const disarmHub = async (): Promise<AxiosResponse> =>
{
    const res = await axiosClient.post(ENDPOINTS.hub.disarm);
    return res.data;
}