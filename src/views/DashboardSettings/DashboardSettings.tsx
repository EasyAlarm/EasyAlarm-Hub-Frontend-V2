import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout';
import { AlarmSettingsTab } from './tabs/AlarmSettingsTab';
import { PingerSettingsTab } from './tabs/PingerSettingsTab';

interface TabPanelProps
{
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) =>
{
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
};

const DashboardSettings: React.FC = () =>
{
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    {
        setValue(newValue);
    };

    return (
        <DashboardLayout headerText='Settings'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Alarm" />
                        <Tab label="Pinger" />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <AlarmSettingsTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <PingerSettingsTab />
                </TabPanel>
            </Box>

        </DashboardLayout>
    );
};

export default DashboardSettings;
