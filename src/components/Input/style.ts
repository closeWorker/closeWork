import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0;
  width: 100%;
  label {
    color: var(--color-neutral-white);
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
  }
  input {
    height: 60px;
    background-color: var(--color-blue-5);
    color: var(--color-blue-1);
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    padding: 20px 15px;
    border-radius: 4px;
    /* Caso de problema no mobile usar isso */
    /* @media (max-width: 700px) {
      width: 95%;
      margin: 0 auto;
    } */
  }
  input::placeholder {
    color: var(--color-blue-1);
  }
  input::focus {
    border: 2px solid var(--color-blue-1);
  }
`;
