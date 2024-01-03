/** @jsxImportSource @emotion/react */

import { Button, LinearProgress, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { CenterModal } from "../../../../components/CenterModal/CenterModal";
import { addUnitModalStyles } from "./addUnitModalStyles";
import { addUnitSchema } from "./addUnitValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddUnitRequest } from "../../dashboardUnitsTypes";
import { useMutation, useQueryClient } from "react-query";
import queryKeys from "../../../../constants/queryKeys";
import { addUnit } from "../../dashboardUnitsApi";
import { AlertType, useAlert } from "../../../../context/AlertContext";
import { LoadingButton } from "@mui/lab";
import { ApiError } from "../../../../types/apiError";

type AddUnitModalProps = {
    isOpen: boolean;
    handleClose: () => void;
};

export const AddUnitModal: FC<AddUnitModalProps> = ({ isOpen, handleClose }) =>
{
    const { alert } = useAlert();
    const queryClient = useQueryClient();

    const onClose = () => 
    {
        reset();
        handleClose();
    };

    const { mutate: addUnitMutation, isLoading } = useMutation([queryKeys.units.addUnit],
        (addUnitRequest: AddUnitRequest) => addUnit(addUnitRequest),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.units.getUnits);
                onClose();
                alert("Unit added successfully", AlertType.Success);
            },
            onError: (error: ApiError) =>
            {
                alert(error.message, AlertType.Error);
            }
        }
    );

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddUnitRequest>({
        resolver: yupResolver(addUnitSchema)
    });

    return (
        <CenterModal title="Add unit" isOpen={isOpen} handleClose={onClose}>
            <form css={addUnitModalStyles} onSubmit={handleSubmit((formData) => { addUnitMutation(formData); })}>
                <TextField
                    label='Friendly name'
                    variant="outlined"
                    disabled={isLoading}
                    error={!!errors.friendlyName}
                    helperText={errors.friendlyName ? errors.friendlyName.message : ''}
                    {...register('friendlyName')}
                />

                <TextField
                    label='Device ID'
                    variant="outlined"
                    disabled={isLoading}
                    error={!!errors.deviceID}
                    helperText={errors.deviceID ? errors.deviceID.message : ''}
                    {...register('deviceID')}
                />

                <div className="action-buttons">
                    <Button onClick={onClose} size="large" variant="contained">CANCEL</Button>
                    <LoadingButton loading={isLoading} type="submit" size="large" variant="contained">APPLY</LoadingButton>
                </div>

                {isLoading && (
                    <div className="waiting-for-pairing-indicator">
                        <LinearProgress
                            color="primary"
                            variant="indeterminate"
                        />
                        <Typography>
                            Please press the pairing button on your Unit
                        </Typography>
                    </div>
                )}
            </form>


        </CenterModal >
    );
};