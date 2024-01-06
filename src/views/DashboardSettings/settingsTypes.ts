import { BaseResponse } from "../../types/baseResponse";

export type AlarmSettingsData = {
    armDelay: number;
    alarmDelay: number;
    alarmDuration: number;
    alarmOnOfflineUnit: boolean;
}

export type PingerSettingsData = {
    shouldPing: boolean;
    globalPingInterval: number;
    betweenPingsInterval: number;
}

export type AlarmSettingsResponse = BaseResponse<AlarmSettingsData>
export type PingerSettingsResponse = BaseResponse<PingerSettingsData>