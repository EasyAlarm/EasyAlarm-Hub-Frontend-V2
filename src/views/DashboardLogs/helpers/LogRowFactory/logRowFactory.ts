import { ActionType, HubStateType, LogData} from "../../../../api/Logs/logsTypes";
import { AlarmStateChangedStrategy } from "./DescriptionStrategies/alarmStateChangedStrategy";
import { EmptyDescriptionStrategy } from "./DescriptionStrategies/emptyDescriptionStrategy";
import { IDescriptionStrategy } from "./DescriptionStrategies/IDescriptionStrategy";
import { UnitTriggeredStrategy } from "./DescriptionStrategies/unitTriggeredStrategy";

enum SeverityType {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}

export class LogRowsFactory {
    private logData: Array<LogData>;

    constructor(logData: Array<LogData>) 
    {
        this.logData = logData;
    }
    
    public createRows()
    {
        const rows = []

        for (const log of this.logData) 
        {
            rows.push(this.createRow(log));
        }
        
        return rows;
    }

    private createRow(log: LogData) 
    {
        return {
            id: log._id,
            severity: this.getSeverity(log),
            timestamp: this.convertIsoDatesToReadable(log),
            source: `${log.source} ${log.friendlyName ? `(${log.friendlyName})` : ''}`,
            description: this.getDescriptionStrategy(log).getDescription(log)
        };
    }
    
    private getDescriptionStrategy(log: LogData): IDescriptionStrategy
    {
        if([ActionType.Armed, ActionType.Disarmed, ActionType.Panicked].includes(log.action))
        {
            return new AlarmStateChangedStrategy();
        }
        else if(log.action === ActionType.Triggered)
        {
            return new UnitTriggeredStrategy();
        }
        else
        {
            return new EmptyDescriptionStrategy();
        }
    }
    
    
    private convertIsoDatesToReadable(log: LogData): string
    {
        const date = new Date(log.timestamp);
        const navigatorLanguage = navigator.language || navigator.languages[0];

        return date.toLocaleString(navigatorLanguage, {hourCycle: 'h23'});
    }


    private getSeverity(log: LogData): SeverityType
    {
        if(log.hubState !== HubStateType.Disarmed && log.action === ActionType.Triggered)
        {
            return SeverityType.High;
        }
        if(log.hubState === HubStateType.Disarmed && log.action === ActionType.Triggered)
        {
            return SeverityType.Medium;
        }
        else if (log.action === ActionType.LoggedIn)
        {
            return SeverityType.Medium;
        }
        else if ([ActionType.Armed, ActionType.Disarmed].includes(log.action))    
        {
            return SeverityType.Medium;
        }
        else if (log.action === ActionType.Panicked)
        {
            return SeverityType.High;
        }
        else
        {
            return SeverityType.Low
        }
    }
    
}
