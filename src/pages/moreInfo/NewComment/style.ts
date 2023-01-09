import styled from "styled-components";

export const ContainerNewComment = styled.form`
  width: 1200px;
  max-width: 100%;

  padding: 20px 16px;

  margin: 0 auto;
  input{
    background-color: var(--color-blue-6);
    border:none;
    width:100%;
  }

  textarea{
    background-color: var(--color-blue-6);
  }
  label{
    color:var(--color-blue-1);
  }

  button{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  align-items:center;
  gap: 25px;
  width: 100%;
  border: none;
  padding: 20px 0;
  label {
    color:var(--color-blue-1);
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
  }
  select {
    height: 60px;
    background-color: var(--color-blue-6);
    color: var(--color-blue-1);
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 0 15px;
    border-radius: 4px;
    border: 2px solid var(--color-blue-5);
    border:none;
  }

`;