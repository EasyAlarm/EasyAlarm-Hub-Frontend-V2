import { css } from "@emotion/react";

export const addUnitModalStyles = () => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  .action-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* two columns for buttons */
    grid-gap: 50px;
  }

  .waiting-for-pairing-indicator {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;