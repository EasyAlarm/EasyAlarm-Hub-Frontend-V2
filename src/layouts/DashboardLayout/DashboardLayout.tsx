/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import { FC } from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import { dashboardLayoutStyles, mainContent } from "./dashboardLayoutStyles";

type DashboardProps = {
    headerText: string | undefined;
    children: React.ReactNode;
    headerRightElement?: React.ReactNode;
};

export const DashboardLayout: FC<DashboardProps> = (props: DashboardProps) =>
{
    return (
        <div css={dashboardLayoutStyles}>
            <SideNavbar />


            <div css={mainContent}>

                <div className="header-container">
                    <Typography className='header-text' component="h1" variant="h4">
                        {props.headerText}
                    </Typography>
                    <div className="header-right-element">
                        {props.headerRightElement}
                    </div>
                </div>

                <div className="body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};