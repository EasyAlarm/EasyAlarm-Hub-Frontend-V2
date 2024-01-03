import { AxiosResponse } from "axios";
import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { AddUnitRequest, UnitResponse, UnitsResponse, UpdateUnitRequest } from "./dashboardUnitsTypes";

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

export const updateUnit = async (deviceID: string, updateUnitRequest: UpdateUnitRequest): Promise<UnitResponse> =>
{
    const res = await axiosClient.patch(`${ENDPOINTS.units.units}/${deviceID}`, updateUnitRequest);
    return res.data;
}

export const deleteUnit = async (deviceID: string): Promise<AxiosResponse> =>
{
    const res = await axiosClient.delete(`${ENDPOINTS.units.units}/${deviceID}`);
    return res;
}