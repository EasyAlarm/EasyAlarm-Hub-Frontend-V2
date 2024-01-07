import { css } from "@emotion/react";

export const actionsPanelStyles = () => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* two columns for buttons */
    grid-gap: 50px;
    

    content: '';
    grid-column: 1 / -1; 

    .panic-button {
        grid-column: 1 / -1;
        justify-self: center;
        width: 100%
    }

    justify-content: center;
    max-height: 100%;
`;