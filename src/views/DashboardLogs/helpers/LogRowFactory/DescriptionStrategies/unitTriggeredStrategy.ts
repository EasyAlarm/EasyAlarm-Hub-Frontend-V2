import { HubStateType, LogData, SourceType } from "../../../../../api/Logs/logsTypes";
import { IDescriptionStrategy } from "./IDescriptionStrategy";

export class UnitTriggeredStrategy implements IDescriptionStrategy 
{
    getDescription(logData: LogData): string
    {
        const wasDisarmed = logData.hubState !== HubStateType.Disarmed;
        
        const extraInfo = wasDisarmed ? ` while hub was ${logData.hubState}` : "";
        
        const sourceSpecificDescription = this.getDescriptionBasedOnSource(logData.source, logData.friendlyName)
        
        return `${sourceSpecificDescription}${extraInfo}`
    }
    
    private getDescriptionBasedOnSource(sourceType: SourceType, friendlyName: string|null): string
    {
        if(friendlyName === null)
        {
            return "";
        }

        if(sourceType === SourceType.DoorGuard)
        {
            return `${friendlyName} was opened`;
        }
        else if(sourceType === SourceType.MotionSense)
        {
            return `Motion detected in ${friendlyName}`;
        }
        else if(sourceType === SourceType.Siren)
        {
            return `Siren ${friendlyName} activated`
        }
        
        return "";
    }
}