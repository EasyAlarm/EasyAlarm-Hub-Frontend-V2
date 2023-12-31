/** @jsxImportSource @emotion/react */

import { LinearProgress, Stack } from "@mui/material";
import { FC } from "react";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";
import { DashboardLayout } from "../../layouts/DashboardLayout/DashboardLayout";
import { Unit } from "./components/Unit";
import { getUnits } from "./dashboardUnitsApi";
import { dashboardUnitsStyles } from "./dashboardUnitsStyles";

export const DashboardUnits: FC = () =>
{
    const { data: unitsData, isLoading: isGetUnitsLoading } = useQuery(queryKeys.units.units, getUnits, {
        refetchInterval: 2000,
        select: responseData => responseData?.data
    });

    return (
        <DashboardLayout headerText="Units">
            <div css={dashboardUnitsStyles}>
                {isGetUnitsLoading ? (
                    <Stack sx={{ width: '97%', color: 'grey.500' }} spacing={2}>
                        <LinearProgress color="inherit" />
                    </Stack>
                ) : (
                    unitsData && (unitsData.map((unit, index) => (
                        <Unit key={index} unit={unit} />
                    )))
                )}
            </div>
        </DashboardLayout >
    );
};
