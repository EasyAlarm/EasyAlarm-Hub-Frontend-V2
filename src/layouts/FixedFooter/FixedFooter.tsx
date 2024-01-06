/** @jsxImportSource @emotion/react */

import { Divider } from "@mui/material";
import { FC } from "react";
import { fixedFooterStyles } from "./fixedFooterStyles";

type FixedFooterProps = {
    children: React.ReactNode;
};

export const FixedFooter: FC<FixedFooterProps> = ({ children }) =>
{
    return (
        <footer css={fixedFooterStyles}>
            <div className="wrapper">
                <Divider className="divider" />
                {children}
            </div>
        </footer>
    );
};