import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue-2);
  padding: 20px;
  gap: 10px;

  label {
    color: var(--color-neutral-white);
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
  }
`;
