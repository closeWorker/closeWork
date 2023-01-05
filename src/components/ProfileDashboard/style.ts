import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  padding: 10px;
  background-color: var(--color-blue-6);
  display: flex;
  flex-direction: column;
`;

export const StyledEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  div {
    width: max-content;
    height: max-content;
    border-radius: 100%;
    padding: 2px;
    background-color: var(--color-neutral-white);
  }
`;

export const StyledProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img,
  h2,
  p {
    width: max-content;
  }
`;
