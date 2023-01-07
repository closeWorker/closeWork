import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0;
  width: 80%;
  select {
    background-color: var(--color-blue-6);
    color: var(--color-blue-1);
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 4px;
    height: 40px;
    text-align: center;
    /* Caso de problema no mobile usar isso */
    /* @media (max-width: 700px) {
      width: 95%;
      margin: 0 auto;
    } */
  }
  select::placeholder {
    color: var(--color-blue-1);
  }
  select::focus {
    border: 2px solid var(--color-blue-1);
  }
`;
