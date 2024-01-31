import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
        field: 'severity',
        headerName: 'Severity'
    },
    {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 250
    },
    {
        field: 'source',
        headerName: 'Source',
        width: 250
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 550
    }
]