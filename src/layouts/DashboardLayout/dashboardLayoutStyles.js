import { css } from "@emotion/react";

export const dashboardLayoutStyles = () => css`
    position: relative;
    display: flex;
    background: white;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const mainContent = () => css`
    max-width: calc(100% - 14rem);
    width: 100%;

    .header-container {
        position: fixed;
        background-color: #EBEBEB;
        width: 100%;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }

    .header {
        margin-inline-start: 2rem;
        padding: 2rem 0 2rem;
    }

    .body {
        padding-top: 7rem;
        margin-inline-start: 2rem;
    }
`;