import styled from "styled-components";

export const DivDelete = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--color-blue-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 50px;
  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  button:first-child {
    background-color: var(--color-negative-hover);
    border: 2px solid var(--color-negative-hover);
    color: var(--color-neutral-white);
  }
  button:first-child:hover {
    background-color: var(--color-negative);
    border: 2px solid var(--color-negative);
    color: var(--color-neutral-black);
  }
`;
