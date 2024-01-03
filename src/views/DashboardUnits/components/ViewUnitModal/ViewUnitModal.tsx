/** @jsxImportSource @emotion/react */

import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { CenterModal } from "../../../../components/CenterModal/CenterModal";
import { yupResolver } from "@hookform/resolvers/yup";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IUnit, UpdateUnitRequest, ViewUnitForm } from "../../dashboardUnitsTypes";
import { useMutation, useQueryClient } from "react-query";
import queryKeys from "../../../../constants/queryKeys";
import { deleteUnit, updateUnit } from "../../dashboardUnitsApi";
import { AlertType, useAlert } from "../../../../context/AlertContext";
import { LoadingButton } from "@mui/lab";
import { ApiError } from "../../../../types/apiError";
import { viewUnitModalStyles } from "./viewUnitModalStyles";
import { updateUnitSchema } from "./updateUnitValidationSchema";

type ViewUnitModalProps = {
    isOpen: boolean;
    unit: IUnit;
    handleClose: () => void;
};

export const ViewUnitModal: FC<ViewUnitModalProps> = ({ isOpen, handleClose, unit }) =>
{
    const { alert } = useAlert();
    const queryClient = useQueryClient();


    const { register, handleSubmit, reset, formState: { errors } } = useForm<ViewUnitForm>({
        defaultValues: unit,
        resolver: yupResolver(updateUnitSchema)
    });

    const onClose = () => 
    {
        reset();
        handleClose();
    };

    const handleApplyClick = () =>
    {
        handleSubmit(data =>
        {
            const updateUnitRequest: UpdateUnitRequest = { friendlyName: data.friendlyName };

            updateUnitMutation({ deviceID: data.deviceID, updateUnitRequest: updateUnitRequest });
        })();
    };

    const handleDeleteClick = () =>
    {
        handleSubmit(data =>
        {
            deleteUnitMutation(data.deviceID);
        })();
    };

    const { mutate: updateUnitMutation, isLoading: isUpdateUnitLoading } = useMutation([queryKeys.units.updateUnit],
        (variables: { deviceID: string, updateUnitRequest: UpdateUnitRequest; }) => updateUnit(variables.deviceID, variables.updateUnitRequest),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.units.getUnits);
                onClose();
                alert("Unit updated successfully", AlertType.Success);
            },
            onError: (error: ApiError) =>
            {
                alert(error.message, AlertType.Error);
            }
        }
    );

    const { mutate: deleteUnitMutation, isLoading: isDeleteUnitLoading } = useMutation([queryKeys.units.deleteUnit],
        (deviceId: string) => deleteUnit(deviceId),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.units.getUnits);
                onClose();
                alert("Unit deleted successfully", AlertType.Success);
            },
            onError: (error: ApiError) =>
            {
                alert(error.message, AlertType.Error);
            }
        }
    );

    return (
        <CenterModal title={unit.type} isOpen={isOpen} handleClose={onClose}>
            <form css={viewUnitModalStyles}>
                <TextField
                    label='Friendly name'
                    variant="outlined"
                    error={!!errors.friendlyName}
                    helperText={errors.friendlyName ? errors.friendlyName.message : ''}
                    {...register('friendlyName')}
                />

                <TextField
                    label='Device ID'
                    variant="outlined"
                    disabled={true}
                    {...register('deviceID')}
                />

                <div className="action-buttons">
                    <Button className="cancel-button" onClick={onClose} size="large" variant="contained">CANCEL</Button>
                    <LoadingButton className="apply-button" loading={isUpdateUnitLoading} onClick={handleApplyClick} size="large" variant="contained">APPLY</LoadingButton>
                    <LoadingButton className="delete-button" loading={isDeleteUnitLoading} onClick={handleDeleteClick} startIcon={<DeleteForeverIcon />} type="submit" size="large" color="error" variant="contained">DELETE</LoadingButton>
                </div>

            </form>


        </CenterModal >
    );
};