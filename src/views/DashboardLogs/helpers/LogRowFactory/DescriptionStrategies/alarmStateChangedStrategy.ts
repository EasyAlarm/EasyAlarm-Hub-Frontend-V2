import { LogData, SourceType } from "../../../../../api/Logs/logsTypes";
import { IDescriptionStrategy } from "./IDescriptionStrategy";

export class AlarmStateChangedStrategy implements IDescriptionStrategy 
{
    getDescription(logData: LogData): string
    {
        const source = logData.source;
        const newState = logData.action;
        
        return `${newState} using ${source}`
    }
}