import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { AddUnitRequest, UnitsResponse } from "./dashboardHomeTypes";

export const getUnits = async (): Promise<UnitsResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.units.units);
    return res.data;
}

export const addUnit = async (addUnitRequest: AddUnitRequest): Promise<UnitsResponse> =>
{
    const res = await axiosClient.post(ENDPOINTS.units.units, addUnitRequest);
    return res.data;
}