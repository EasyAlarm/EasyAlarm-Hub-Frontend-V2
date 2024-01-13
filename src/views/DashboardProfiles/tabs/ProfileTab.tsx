/** @jsxImportSource @emotion/react */

import { LoadingButton } from "@mui/lab";
import { Button, LinearProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../../../constants/queryKeys";
import { AlertType, useAlert } from "../../../context/AlertContext";
import { FixedFooter } from "../../../layouts/FixedFooter/FixedFooter";
import { Unit } from "../../DashboardUnits/components/Unit/Unit";
import { dashboardUnitsStyles } from "../../DashboardUnits/dashboardUnitsStyles";
import { IUnit } from "../../DashboardUnits/dashboardUnitsTypes";
import { getProfile, updateProfile } from "../dashboardProfilesApi";
import { ProfileUpdateRequest } from "../dashboardProfilesTypes";

type ProfileTabProps = {
    profileName: string;
    units: Array<IUnit>;
};

export const ProfileTab: React.FC<ProfileTabProps> = ({ profileName, units }) =>
{
    const queryClient = useQueryClient();
    const { alert } = useAlert();

    const { data: profileUnitsData, isLoading } = useQuery([queryKeys.profiles.getProfile, profileName],
        () => getProfile(profileName), {
        select: responseData => responseData?.data
    });

    const { mutate: updateProfileMutation, isLoading: isUpdateUnitProfileLoading } = useMutation([queryKeys.profiles.updateProfile],
        (variables: { profileName: string, profileUpdateRequest: ProfileUpdateRequest; }) => updateProfile(variables.profileName, variables.profileUpdateRequest),
        {
            onSuccess: () =>
            {
                queryClient.invalidateQueries(queryKeys.profiles.getProfile);
                console.log("success");
                alert("Profile updated successfully", AlertType.Success);
            },
            onError: () =>
            {
                alert("Something went wrong", AlertType.Error);
            }
        }
    );

    const isUnitIncluded = (unitID: string) => profileUnitsData && selectedUnits.includes(unitID);

    const onUnitClick = (unitID: string) =>
    {
        setSelectedUnits(prevSelectedUnits =>
        {
            if (prevSelectedUnits.includes(unitID))
            {
                return prevSelectedUnits.filter(id => id !== unitID);
            }
            else
            {
                return [...prevSelectedUnits, unitID];
            }
        });
    };

    const onSaveClick = () =>
    {
        updateProfileMutation({ profileName: profileName, profileUpdateRequest: { unitsIDS: selectedUnits } });
    };

    const resetUnitsSelection = () =>
    {
        setSelectedUnits(initialSelectedUnits);
    };

    const [selectedUnits, setSelectedUnits] = useState<Array<string>>([]);
    const [initialSelectedUnits, setInitialSelectedUnits] = useState<Array<string>>([]);

    useEffect(() =>
    {
        if (profileUnitsData && profileUnitsData.unitIDS)
        {
            setSelectedUnits(profileUnitsData.unitIDS);
            setInitialSelectedUnits(profileUnitsData.unitIDS);
        }
    }, [profileUnitsData]);

    return (
        <>
            <div css={dashboardUnitsStyles}>
                {isLoading ? (
                    <Stack sx={{ width: '97%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="inherit" />
                    </Stack>
                ) : (
                    units.map((unit, index) => (
                        <Unit
                            onClick={() => onUnitClick(unit._id)}
                            key={index}
                            unit={unit}
                            backgroundColor={isUnitIncluded(unit._id) ? "#71BBFF" : undefined}
                        />
                    ))
                )}
            </div>


            <FixedFooter>
                <LoadingButton loading={isUpdateUnitProfileLoading}
                    type="submit"
                    onClick={onSaveClick}
                    variant="contained"
                    color="primary">
                    Save
                </LoadingButton>

                <Button onClick={(): void => resetUnitsSelection()} variant="outlined">Cancel</Button>
            </FixedFooter>
        </>
    );
};