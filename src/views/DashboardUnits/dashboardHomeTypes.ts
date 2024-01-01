import { BaseResponse } from "../../types/baseResponse";

export interface IUnit 
{
    type: string,
    friendlyName: string,
    deviceID: string,
    online: boolean,
}

export type AddUnitRequest = {
    friendlyName: string
    deviceID: string
}

export type UnitsResponse = BaseResponse<Array<IUnit>>
export type UnitResponse = BaseResponse<IUnit>