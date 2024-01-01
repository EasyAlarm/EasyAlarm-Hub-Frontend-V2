/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import { FC } from "react";
import { addUnitButtonStyles } from "./addUnitButtonStyles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type AddUnitButtonProps = {
    onClick: () => void;
};

export const AddUnitButton: FC<AddUnitButtonProps> = ({ onClick }) => 
{
    return (
        <div onClick={onClick} css={addUnitButtonStyles}>
            <Typography className='button-text' component="h1" variant="h4">
                Add unit
            </Typography>
            <AddCircleOutlineIcon className="icon" />
        </div>
    );
};