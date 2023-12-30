import { BaseResponse } from "../../types/baseResponse";

export type HubStatusData = {
    state: string,
    currentProfile: string
}

export type HubStatusResponse = BaseResponse<HubStatusData>