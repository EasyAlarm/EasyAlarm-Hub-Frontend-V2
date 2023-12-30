import { css } from "@emotion/react";

export const ActionButtonStyles = () => css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 2rem;
    padding: 5rem;

    background: transparent;
    cursor: pointer;
    font-size: large;
    border: 1px solid #635858;
    border-radius: 5px;

    width: 200px; 
    height: 100px;
    

    &:hover {
        background-color: #f0f0f0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    &:active {
        background-color: #e0e0e0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transform: translateY(2px);
    }
    
    &:disabled {
        cursor: default;
        background-color: inherit;
        box-shadow: none;
        transform: none;
        pointer-events: none; 
    }
    
      @media (max-width: 868px) { 
        width: 150px;
        height: 80px;
        padding: 3rem;
        gap: 1rem;
        font-size: medium;
    }
`;