/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { backgroundShadowStyles } from "./backgroundShadowStyles";

type BackgroundShadowProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export const BackgroundShadow: FC<BackgroundShadowProps> = ({ children, onClick }) => 
{
    return (
        <div css={backgroundShadowStyles} onClick={onClick}>
            {children}
        </div>
    );
};