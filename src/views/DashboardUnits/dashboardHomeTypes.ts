import { BaseResponse } from "../../types/baseResponse";

export interface IUnit 
{
    type: string,
    friendlyName: string,
    deviceID: string,
    online: boolean,
}

export type GetUnitsResponse = BaseResponse<Array<IUnit>>