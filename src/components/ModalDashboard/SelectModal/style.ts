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
  select {
    width: 100%;
    height: 60px;
    background-color: var(--color-blue-5);
    color: var(--color-blue-1);
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 0 15px;
    border-radius: 4px;
    border: 2px solid var(--color-blue-5);
  }
`;
