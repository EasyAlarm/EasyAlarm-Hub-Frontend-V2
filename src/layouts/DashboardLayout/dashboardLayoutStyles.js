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
        display: flex;
        flex-direction: row;
        justify-content: space-between; /* aligns children to the start and end of container */

        background-color: #EBEBEB;
        max-width: calc(100% - 14rem);
        min-width: 100%;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

        .header-text {
            margin-inline-start: 2rem;
            padding: 2rem 0 2rem;
        }

        .header-right-element {
            margin-inline-end: 2rem;
            padding: 2rem 0 2rem;
        }
        
        z-index: 10000;
    }


    .body {
        padding-top: 7rem;
        margin-inline-start: 2rem;
    }
`;