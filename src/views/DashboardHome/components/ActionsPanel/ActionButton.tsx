/** @jsxImportSource @emotion/react */

import { CircularProgress } from "@mui/material";
import { FC, ReactElement } from "react";
import { ActionButtonStyles } from "./actionButtonStyles";

type ActionButtonProps = {
    title: string,
    icon: ReactElement,
    isLoading?: boolean;
    onClick?: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({
    title,
    icon,
    isLoading = false,
    onClick,
}) => 
{
    return (
        <button disabled={isLoading} onClick={onClick} css={ActionButtonStyles}>
            {title}

            {isLoading ? <CircularProgress size={35} sx={{ color: 'gray' }} /> : icon}
        </button>
    );
};