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
import { getPingerSettings, savePingerSettings } from "../settingsApi";
import { PingerSettingsData } from "../settingsTypes";
import { savePingerSettingsSchema } from "../settingsValidationSchema";
import { SettingsSkeleton } from "../components/SettingsSkeleton";
import { tabSettingsStyles } from "./tabStyles";

export const PingerSettingsTab: FC = () =>
{
    const { alert } = useAlert();
    const queryClient = useQueryClient();

    const { data: settings, isLoading: areSettingsLoading } = useQuery(queryKeys.settings.getPinger, getPingerSettings, {
        select: responseData => responseData?.data
    });

    const { mutate: saveSettingsMutation, isLoading: areSaveSettingsLoading } = useMutation(
        [queryKeys.settings.savePinger],
        (saveSettingsRequest: PingerSettingsData) => savePingerSettings(saveSettingsRequest),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.settings.getPinger);
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
    } = useForm<PingerSettingsData>({
        mode: 'onChange',
        values: settings,
        resolver: yupResolver(savePingerSettingsSchema)
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
                            label="Global ping interval"
                            type="number"
                            error={!!errors.globalPingInterval}
                            variant="outlined"
                            {...register("globalPingInterval")}
                            InputProps={{
                                inputProps: { min: 1 },
                                endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Interval between pings"
                            type="number"
                            error={!!errors.betweenPingsInterval}
                            variant="outlined"
                            {...register("betweenPingsInterval")}
                            InputProps={{
                                inputProps: { min: 1 },
                                endAdornment: <InputAdornment position="end">sec</InputAdornment>,
                            }}
                        />
                        <Controller
                            name="shouldPing"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <FormControlLabel
                                    control={<Switch checked={value} onChange={onChange} />}
                                    label="Enabled"
                                />
                            )}
                        />
                    </div>

                    <FixedFooter>
                        <div className="form-footer">
                            <LoadingButton loading={areSaveSettingsLoading}
                                type="submit"
                                disabled={!isValid}
                                variant="contained"
                                color="primary">
                                Save
                            </LoadingButton>

                            <Button onClick={(): void => reset()} variant="outlined">Cancel</Button>
                        </div>
                    </FixedFooter>
                </form >
            )}

        </>
    );
};