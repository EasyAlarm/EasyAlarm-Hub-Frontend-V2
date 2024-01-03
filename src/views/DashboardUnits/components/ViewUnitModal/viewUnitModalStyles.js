import { css } from "@emotion/react";

export const viewUnitModalStyles = () => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  .action-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* two columns for buttons */
    grid-gap: 50px;
    
  }

  .action-buttons::after {
    content: '';
    grid-column: 1 / -1; 
  }

  .delete-button {
    grid-column: 1 / -1;
    justify-self: center;
    width: 100%
  }


  .waiting-for-pairing-indicator {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;