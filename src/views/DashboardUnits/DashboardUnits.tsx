/** @jsxImportSource @emotion/react */

import { LinearProgress, Stack } from "@mui/material";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";
import { DashboardLayout } from "../../layouts/DashboardLayout/DashboardLayout";
import { AddUnitButton } from "./components/AddUnitButton/AddUnitButton";
import { AddUnitModal } from "./components/AddUnitModal/AddUnitModal";
import { Unit } from "./components/Unit/Unit";
import { getUnits } from "./dashboardUnitsApi";
import { dashboardUnitsStyles } from "./dashboardUnitsStyles";

export const DashboardUnits: FC = () =>
{
    const { data: unitsData, isLoading: isGetUnitsLoading } = useQuery(queryKeys.units.getUnits, getUnits, {
        refetchInterval: 2000,
        select: responseData => responseData?.data
    });

    const [isAddUnitModalOpen, setAddUnitModalOpen] = useState(false);

    return (
        <>
            <DashboardLayout headerText="Units" headerRightElement={<AddUnitButton onClick={() => setAddUnitModalOpen(true)} />}>
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

            <AddUnitModal isOpen={isAddUnitModalOpen} handleClose={() => setAddUnitModalOpen(false)} />
        </>
    );
};
