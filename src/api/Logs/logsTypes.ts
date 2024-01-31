import { BaseResponse } from "../../types/baseResponse";

export enum HubStateType {
    Armed = "Armed",
    Disarmed = "Disarmed",
    Alarm = "Alarm"
}

export enum ActionType {
    Triggered = "Triggered",
    Armed = "Armed",
    Disarmed = "Disarmed",
    Panicked = "Panicked",
    LoggedIn = "Logged in",
}

export enum SourceType {
    Siren = "Siren",
    DoorGuard = "DoorGuard",
    Rfid = "Rfid",
    MotionSense = "MotionSense",
    Hub = "Hub",
    KeyFob = "KeyFob",
    WebApp = "WebApp",
}

export type LogData = {
    _id: string,
    timestamp: number,
    action: ActionType,
    source: SourceType,
    friendlyName: string | null
    hubState: HubStateType
}

export type LogsResponse = BaseResponse<Array<LogData>>