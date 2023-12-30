/** @jsxImportSource @emotion/react */
import { Skeleton } from "@mui/material";
import { statusPanelStyles } from "./statusPanelStyles";

const StatusPanelSkeleton = () =>
{
    return (
        <div css={statusPanelStyles}>
            <div className="section">
                <Skeleton variant="text" width="50%" height={32} style={{ margin: 'auto' }} />
                <Skeleton variant="rectangular" width="70%" height={28} style={{ margin: 'auto' }} />
            </div>

            <div className="section">
                <Skeleton variant="text" width="50%" height={32} style={{ margin: 'auto' }} />
                <Skeleton variant="rectangular" width="70%" height={28} style={{ margin: 'auto' }} />
            </div>
        </div>
    );
};

export default StatusPanelSkeleton;
