import { css } from "@emotion/react";

export const unitStyles = () => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    gap: 0.25rem;

    width: 13rem;
    height: 11rem;

    border-radius: 25px;

    cursor: pointer;

    background-color: #E5E5E5;

    .friendly-name {
        margin-top: 1.5rem;
    }

    .unit-type {
        color: #635858;
        font-size: medium;
    }
    
    .signal-icon {
        margin-top: 2rem;
    }
    
`;