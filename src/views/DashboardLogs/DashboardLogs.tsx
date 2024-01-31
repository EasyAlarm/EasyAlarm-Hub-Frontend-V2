import { LinearProgress, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import { LogData } from "../../api/Logs/logsTypes";
import queryKeys from "../../constants/queryKeys";
import { DashboardLayout } from "../../layouts/DashboardLayout/DashboardLayout";
import { columns } from "./columns";
import { getLogs } from "./dashboardLogsApi";
import { LogRowsFactory } from "./helpers/LogRowFactory/logRowFactory";

export const DashboardLogs: React.FC = () => 
{
    const { data, isLoading } = useQuery(queryKeys.logs.getLogs, getLogs, {
        select: responseData => responseData?.data
    });

    const convertLogDataToRows = (logs: Array<LogData>) => 
    {
        const logRowsFactor = new LogRowsFactory(logs);
        return logRowsFactor.createRows();
    };

    return (
        <DashboardLayout headerText="Logs">
            <Box sx={{ width: '95%', marginTop: '2rem' }}>
                {isLoading ? (
                    <Stack sx={{ width: '97%', color: 'grey.500', marginTop: '3rem' }} spacing={2}>
                        <LinearProgress color="inherit" />
                    </Stack>
                ) : (
                    data && (
                        <DataGrid
                            rows={convertLogDataToRows(data)}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 15
                                    },
                                },
                            }}
                            disableRowSelectionOnClick
                        />
                    ))}
            </Box>
        </DashboardLayout>
    );
};