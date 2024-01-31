import { LogData } from "../../../../../api/Logs/logsTypes";
import { IDescriptionStrategy } from "./IDescriptionStrategy";

export class EmptyDescriptionStrategy implements IDescriptionStrategy
{
    getDescription(logData: LogData): string
    {
        return "";
    }
    
}