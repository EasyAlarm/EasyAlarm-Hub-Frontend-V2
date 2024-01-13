/** @jsxImportSource @emotion/react */

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Button, Divider, FormControlLabel, InputAdornment, Switch, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../../../constants/queryKeys";
import { AlertType, useAlert } from "../../../context/AlertContext";
import { FixedFooter } from "../../../layouts/FixedFooter/FixedFooter";
import { getAlarmSettings, saveAlarmSettings } from "../settingsApi";
import { AlarmSettingsData } from "../settingsTypes";
import { saveAlarmSettingsSchema } from "../settingsValidationSchema";
import { SettingsSkeleton } from "../components/SettingsSkeleton";
import { tabSettingsStyles } from "./tabStyles";

export const AlarmSettingsTab: FC = () =>
{
    const { alert } = useAlert();
    const queryClient = useQueryClient();

    const { data: settings, isLoading: areSettingsLoading } = useQuery(queryKeys.settings.getAlarm, getAlarmSettings, {
        select: responseData => responseData?.data
    });

    const { mutate: saveSettingsMutation, isLoading: areSaveSettingsLoading } = useMutation(
        [queryKeys.settings.saveAlarm],
        (saveSettingsRequest: AlarmSettingsData) => saveAlarmSettings(saveSettingsRequest),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.settings.getAlarm);
                alert("Settings saved successfully", AlertType.Success);
            },
            onError: () =>
            {
                alert("Something went wrong", AlertType.Error);
            }
        }
    );

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isValid }
    } = useForm<AlarmSettingsData>({
        mode: 'onChange',
        values: settings,
        resolver: yupResolver(saveAlarmSettingsSchema)
    });


    return (
        <>
            {areSettingsLoading ? (
                <SettingsSkeleton />
            ) : (

                <form css={tabSettingsStyles} onSubmit={handleSubmit((formData) => { saveSettingsMutation(formData); })}>
                    <div className="form-elements">
                        <Typography className="container-title">
                            Configure Alarm Settings
                        </Typography>

                        <Divider />

                        <TextField
                            label="Arm Delay"
                            type="number"
                            error={!!errors.armDelay}
                            helperText="Set the duration (in seconds) to activate the alarm after arming."
                            variant="outlined"
                            {...register("armDelay")}
                            InputProps={{

                                inputProps: { min: 1 },
                                endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Alarm Delay"
                            type="number"
                            error={!!errors.alarmDelay}
                            helperText="Specify the time interval (in seconds) between triggering and the alarm sounding."
                            variant="outlined"
                            {...register("alarmDelay")}
                            InputProps={{
                                inputProps: { min: 1 },
                                endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                            }}
                        />
                        <TextField
                            type="number"
                            label="Alarm Duration"
                            error={!!errors.alarmDuration}
                            helperText="Choose how long (in seconds) the alarm will sound before it automatically turns off."
                            variant="outlined"
                            {...register("alarmDuration")}
                            InputProps={{
                                inputProps: { min: 1 },
                                endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                            }}
                        />
                        <Controller
                            name="alarmOnOfflineUnit"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <FormControlLabel
                                    control={<Switch checked={value} onChange={onChange} />}
                                    label="Trigger alarm on offline unit"
                                />
                            )}
                        />
                    </div>

                    <FixedFooter>
                        <LoadingButton loading={areSaveSettingsLoading}
                            type="submit"
                            disabled={!isValid}
                            variant="contained"
                            color="primary">
                            Save
                        </LoadingButton>

                        <Button onClick={(): void => reset()} variant="outlined">Cancel</Button>
                    </FixedFooter>
                </form >
            )}

        </>
    );
};