/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import { FC } from "react";
import { HubStatusData } from "../../dashboardHomeTypes";
import { statusPanelStyles } from "./statusPanelStyles";

type StatusPanelProps = {
    hubStatus: HubStatusData;
};

export const StatusPanel: FC<StatusPanelProps> = ({ hubStatus }) =>
{
    return (
        <div css={statusPanelStyles}>

            <div className="section">
                <Typography variant='h5'>
                    Hub State
                </Typography>

                <Typography className="subtitle" variant='h6'>
                    {hubStatus.state}
                </Typography>
            </div>


            <div className="section">
                <Typography variant='h5'>
                    Current Profile
                </Typography>

                <Typography className="subtitle" variant='h6'>
                    {hubStatus.currentProfile}
                </Typography>
            </div>
        </div>
    );
};
