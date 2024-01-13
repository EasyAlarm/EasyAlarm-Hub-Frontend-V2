import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";
import { ProfileResponse, ProfilesResponse, ProfileUpdateRequest } from "./dashboardProfilesTypes";

export const getProfiles = async (): Promise<ProfilesResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.profiles.profiles);
    return res.data;
}

export const getProfile = async (profileName: string): Promise<ProfileResponse> =>
{
    const res = await axiosClient.get(`${ENDPOINTS.profiles.profiles}/${profileName}`);
    return res.data;
}

export const updateProfile = async (profileName: string, profileUpdateRequest: ProfileUpdateRequest): Promise<ProfileResponse> =>
{
    const res = await axiosClient.put(`${ENDPOINTS.profiles.profiles}/${profileName}`, profileUpdateRequest);
    return res.data;
}