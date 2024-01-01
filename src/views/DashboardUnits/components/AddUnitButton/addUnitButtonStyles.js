import { css } from "@emotion/react";

export const addUnitButtonStyles = () => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    background: transparent;
    border: none;
    margin: 0;
    cursor: pointer;

    .icon {
        font-size: 40px;
    }
`;