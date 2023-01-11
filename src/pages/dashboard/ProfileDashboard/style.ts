import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 55px;
  background-color: var(--color-blue-2);
  color: var(--color-neutral-white);
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
  button {
    height: max-content;
    padding: 5px;
  }
`;

export const StyledProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  @media (min-width: 666px) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
  div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    h2:nth-child(1) {
      width: 100%;
      max-width: 380px;
      text-align: center;
      word-break: break-word;
    }
  }
`;
