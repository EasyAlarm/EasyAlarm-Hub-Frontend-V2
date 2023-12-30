/** @jsxImportSource @emotion/react */

import { Container } from "@mui/system";
import { FC } from "react";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";
import { DashboardLayout } from "../../layouts/DashboardLayout/DashboardLayout";
import { useStore } from "../../store/store";
import { ActionsPanel } from "./components/ActionsPanel/ActionsPanel";
import { StatusPanel } from "./components/StatusPanel/StatusPanel";
import StatusPanelSkeleton from "./components/StatusPanel/StatusPanelSkeleton";
import { getHubStatus } from "./dashboardHomeApi";
import { statusContainerStyles } from "./dashboardHomeStyles";

export const DashboardHome: FC = () =>
{
    const { data, isLoading } = useQuery(queryKeys.hub.status, getHubStatus, {
        refetchInterval: 2000
    });

    const user = useStore(state => state.user);

    return (
        <DashboardLayout headerText={`Welcome, ${user?.username}`}>

            <Container maxWidth="sm" css={statusContainerStyles}>
                {isLoading ? <StatusPanelSkeleton /> : data?.data && <StatusPanel hubStatus={data.data} />}
                <ActionsPanel />
            </Container>

        </DashboardLayout>

    );
};