import { LogsResponse } from "../../api/Logs/logsTypes";
import { ENDPOINTS } from "../../constants/endpoints";
import axiosClient from "../../utils/axiosClient";

export const getLogs = async (): Promise<LogsResponse> =>
{
    const res = await axiosClient.get(ENDPOINTS.logs.logs);
    return res.data;
}