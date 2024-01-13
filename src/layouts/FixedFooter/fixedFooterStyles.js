import { css } from "@emotion/react";

export const fixedFooterStyles = () => css`
    position: sticky;
    bottom: 0;

    .wrapper {
        position: fixed;
        border: 0;
        z-index: 10000;
        bottom: 0;
        max-width: 100%;
        width: 100%;

        .divider {
            position: fixed;
            width: 100vw;
            left: 0;
            z-index: 10;
        }
    }
    
    .footer-body {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        background-color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

