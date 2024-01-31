import { LogData } from "../../../../../api/Logs/logsTypes";

export interface IDescriptionStrategy 
{
    getDescription(logData: LogData): string;
}