import * as yup from 'yup';

export const saveAlarmSettingsSchema = yup.object().shape({
    alarmDelay: yup.number().positive().max(3600).required("Alarm delay is required"),
    alarmDuration: yup.number().positive().max(3600).required("Alarm delay is required"),
    armDelay: yup.number().positive().max(3600).required("Alarm delay is required"),
    alarmOnOfflineUnit: yup.boolean().required()
});

export const savePingerSettingsSchema = yup.object().shape({
    globalPingInterval: yup.number().positive().max(3600).required("Global pinger interval is required"),
    betweenPingsInterval: yup.number().positive().max(3600).required("Interval between pings is required"),
    shouldPing: yup.boolean().required()
});