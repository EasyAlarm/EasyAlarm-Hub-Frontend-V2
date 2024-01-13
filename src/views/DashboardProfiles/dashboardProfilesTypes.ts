import { BaseResponse } from "../../types/baseResponse";

export type ProfilesData = {
    _id: string;
    name: string;
}

export type ProfileData = {
    _id: string;
    name: string;
    unitIDS: Array<string>
}

export type ProfileUpdateRequest = {
    unitsIDS: Array<string>
}



export type ProfilesResponse = BaseResponse<Array<ProfilesData>>;

export type ProfileResponse = BaseResponse<ProfileData>;