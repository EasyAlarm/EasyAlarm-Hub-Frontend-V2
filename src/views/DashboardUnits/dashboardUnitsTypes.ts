import { BaseResponse } from "../../types/baseResponse";

export interface IUnit 
{
    _id: string,
    type: string,
    friendlyName: string,
    deviceID: string,
    online: boolean,
}

export type AddUnitRequest = {
    friendlyName: string
    deviceID: string
}

export type UpdateUnitRequest = {
    friendlyName: string
}

export type UnitsResponse = BaseResponse<Array<IUnit>>
export type UnitResponse = BaseResponse<IUnit>
export type ViewUnitForm = AddUnitRequest;