import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { AlarmSettingsData, AlarmSettingsResponse, PingerSettingsData, PingerSettingsResponse } from "./settingsTypes";

export const getAlarmSettings = async(): Promise<AlarmSettingsResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.settings.alarm);
    return res.data;
}

export const saveAlarmSettings = async(alarmSettingsRequest: AlarmSettingsData): Promise<AlarmSettingsResponse> =>
{
    const res = await axiosClient.patch(ENDPOINTS.settings.alarm, alarmSettingsRequest);
    return res.data;
}

export const getPingerSettings = async(): Promise<PingerSettingsResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.settings.pinger);
    return res.data;
}

export const savePingerSettings = async(pingerSettingsRequest: PingerSettingsData): Promise<PingerSettingsResponse> =>
{
    const res = await axiosClient.patch(ENDPOINTS.settings.pinger, pingerSettingsRequest);
    return res.data;
}