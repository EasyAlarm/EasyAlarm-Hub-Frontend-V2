import * as yup from 'yup';

const codePoints = "0123456789abcdefghijklmnopqrstuvwxyz";

export const addUnitSchema = yup.object().shape({
    friendlyName: yup.string().required("Friendly name is required"),
    deviceID: yup.string()
                .required("Device ID is required")
                .length(6, "Device ID must be 6 characters long")
                .test(
                     'is-valid-deviceId',
                     'Invalid Device ID',
                     (deviceId) => validateCheckCharacter(deviceId)
                 )
});

const numberOfValidInputCharacters = () =>
{
    return codePoints.length;
};

const codePointFromCharacter = (character: string) =>
{
    return codePoints.indexOf(character);
};

const validateCheckCharacter = (input: string): boolean =>
{
    let factor = 1;
    let sum = 0;
    let n = numberOfValidInputCharacters();

    // Starting from the right, work leftwards
    // Now, the initial "factor" will always be "1"
    // since the last character is the check character.
    for (let i = input.length - 1; i >= 0; i--)
    {
        let codePoint = codePointFromCharacter(input.charAt(i));
        let addend = factor * codePoint;

        // Alternate the "factor" that each "codePoint" is multiplied by
        factor = (factor === 2) ? 1 : 2;

        // Sum the digits of the "addend" as expressed in base "n"
        addend = (Math.floor(addend / n)) + (addend % n);
        sum += addend;
    }
    let remainder = sum % n;
    return (remainder === 0);
};
