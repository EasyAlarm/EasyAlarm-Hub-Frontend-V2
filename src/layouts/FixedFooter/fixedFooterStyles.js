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
`;