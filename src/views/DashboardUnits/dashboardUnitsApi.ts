import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { GetUnitsResponse } from "./dashboardHomeTypes";

export const getUnits = async (): Promise<GetUnitsResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.units.units);
    return res.data;
}