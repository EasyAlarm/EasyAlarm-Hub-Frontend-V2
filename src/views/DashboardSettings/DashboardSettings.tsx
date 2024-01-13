import React, { useState } from 'react';
import { Tab, Box } from '@mui/material';
import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout';
import { AlarmSettingsTab } from './tabs/AlarmSettingsTab';
import { PingerSettingsTab } from './tabs/PingerSettingsTab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const DashboardSettings: React.FC = () =>
{
    const [currentTab, setCurrentTab] = useState("alarm");

    const handleChange = (event: React.SyntheticEvent, newValue: string) =>
    {
        setCurrentTab(newValue);
    };

    return (
        <DashboardLayout headerText='Settings'>
            <Box sx={{ width: '100%' }}>
                <TabContext value={currentTab}>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange}>
                            <Tab label="Alarm" value="alarm" />
                            <Tab label="Pinger" value="pinger" />
                        </TabList>
                    </Box>

                    <TabPanel value="alarm">
                        <AlarmSettingsTab />
                    </TabPanel>

                    <TabPanel value="pinger">
                        <PingerSettingsTab />
                    </TabPanel>

                </TabContext>
            </Box>

        </DashboardLayout >
    );
};

export default DashboardSettings;
