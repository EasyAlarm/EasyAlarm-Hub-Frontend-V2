/** @jsxImportSource @emotion/react */

import { Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { IUnit } from "../../dashboardUnitsTypes";
import { unitStyles } from "./unitStyles";
import SignalCellularConnectedNoInternet4BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet4Bar';

type UnitProps = {
    unit: IUnit;
    onClick: () => void;
    backgroundColor?: string;
};

export const Unit: FC<UnitProps> = ({ unit, onClick, backgroundColor = "#E5E5E5" }) =>
{
    return (
        <div onClick={onClick} css={unitStyles({ backgroundColor })}>
            <Typography className="friendly-name" variant='h5'>
                {unit.friendlyName}
            </Typography>

            <Typography className="unit-type" variant='h6'>
                {unit.type}
            </Typography>

            <Tooltip title="Pinger disabled from settings">
                <SignalCellularConnectedNoInternet4BarIcon className="signal-icon" fontSize="small" />
            </Tooltip>
        </div>
    );
};