import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, LinearProgress, Stack, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";
import { DashboardLayout } from "../../layouts/DashboardLayout/DashboardLayout";
import { getUnits } from "../DashboardUnits/dashboardUnitsApi";
import { getProfiles } from "./dashboardProfilesApi";
import { ProfileTab } from "./tabs/ProfileTab";


export const DashboardProfiles: React.FC = () =>
{
    const { data: profilesData, isFetched: areProfilesFetched, isLoading: areProfilesLoading } = useQuery(queryKeys.profiles.getProfiles, getProfiles, {
        select: responseData => responseData?.data
    });

    const { data: unitsData, isFetched: isGetUnitsFetched } = useQuery(queryKeys.units.getUnits, getUnits, {
        select: responseData => responseData?.data
    });

    const [currentTab, setCurrentTab] = useState("");

    const hasFetched = areProfilesFetched && isGetUnitsFetched;

    useEffect(() =>
    {
        if (profilesData && profilesData.length > 0)
        {
            setCurrentTab(profilesData[0].name);
        }
    }, [hasFetched, profilesData]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) =>
    {
        setCurrentTab(newValue);
    };

    return (
        <DashboardLayout headerText="Profiles">
            <Box sx={{ width: '100%' }}>
                {areProfilesLoading ? (
                    <Stack sx={{ width: '97%', color: 'grey.500', marginTop: '3rem' }} spacing={2}>
                        <LinearProgress color="inherit" />
                    </Stack>
                ) : (
                    <TabContext value={currentTab}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange}>
                                {(profilesData && unitsData) && profilesData.map((profile, index) => (
                                    <Tab label={profile.name} key={index} value={profile.name} />
                                ))}
                            </TabList>
                        </Box>

                        {(profilesData && unitsData) && profilesData.map((profile, index) => (
                            <TabPanel key={index} value={profile.name}>
                                <ProfileTab units={unitsData} profileName={profile.name} />
                            </TabPanel>
                        ))}
                    </TabContext>
                )}
            </Box>
        </DashboardLayout>
    );
};
