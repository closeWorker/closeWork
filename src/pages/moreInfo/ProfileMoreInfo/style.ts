import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: var(--color-blue-2);
  color: var(--color-neutral-white);
  display: flex;
  flex-direction: column;
`;

export const StyledProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

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
    gap: 3px;
    h2:nth-child(1) {
      width: 100%;
      max-width: 380px;
      text-align: center;
      word-break: break-word;
    }
    a {
      width: 40px;
    }
    img {
      width: 100%;
    }
  }
`;
