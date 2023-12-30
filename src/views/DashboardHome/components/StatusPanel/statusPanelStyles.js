import { css } from "@emotion/react";

export const statusPanelStyles = () => css`
    display: flex;
    flex-direction: column;
    
    gap: 1rem;

    text-align: center;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    padding: 2rem;
    
    .section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        .subtitle {
            color: #867B7B;
        }
    }


`;