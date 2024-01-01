import { css } from "@emotion/react";

export const centerModalStyles = () => css`
  position: absolute;

  top: 20vh;
  left: calc(50% - 25rem);
  right: 50%;
  
  
  width: 50rem;
  height: 30rem;

  box-sizing: border-box;
  border: 2px solid #000;
  background-color: white;

  .modal-content {
    margin-top: 4rem;
    display: flex;

    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .modal-title {
      margin-bottom: 1rem;
    }
  }

`;