import * as yup from 'yup';

export const updateUnitSchema = yup.object().shape({
    friendlyName: yup.string().required("Friendly name is required"),
    deviceID: yup.string().required("Device id is required")
});
