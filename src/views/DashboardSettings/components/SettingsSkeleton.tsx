/** @jsxImportSource @emotion/react */

import { Skeleton, Divider, Typography, Box } from '@mui/material';
import { FC } from 'react';
import { tabSettingsStyles } from '../tabs/tabStyles';


export const SettingsSkeleton: FC = () =>
{
    return (
        <div css={tabSettingsStyles}>
            {/* Title Skeleton */}
            <Typography component="div">
                <Skeleton width="60%" />
            </Typography>

            <Divider />

            {/* TextField Skeletons */}
            {[...Array(3)].map((_, index) => (
                <Box key={index} my={2}>
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="rectangular" width="100%" height={56} />
                    <Skeleton variant="text" width="80%" />
                </Box>
            ))}

            {/* Switch Skeleton */}
            <Box display="flex" alignItems="center">
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width="60%" />
            </Box>
        </div>
    );
};
