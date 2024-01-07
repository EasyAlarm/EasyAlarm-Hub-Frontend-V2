import { css } from "@emotion/react";

export const tabSettingsStyles = () => css`
    .form-elements{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 50rem;


        padding: 1.25rem 2rem 2rem;
        border-radius: 0.313rem;
        box-shadow: rgb(193, 197, 200) 0px 0.188rem 0.375rem 0px;

        .container-title{
            color: #867B7B;
        }
    }


    .form-footer {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        background-color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;