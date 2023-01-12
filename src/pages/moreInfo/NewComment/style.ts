import styled from "styled-components";

export const ContainerNewComment = styled.form`
  width: 1200px;
  max-width: 100%;

  padding: 20px 16px;

  margin: 0 auto;
  input {
    background-color: var(--color-blue-6);
    border: none;
    width: 100%;
  }

  textarea {
    background-color: var(--color-blue-6);
  }

  button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 200px;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  border: none;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    width: 100%;
    padding: 20px 0;
  }
  > p {
    margin-bottom: 20px;
    margin-top: -20px;
  }
`;
