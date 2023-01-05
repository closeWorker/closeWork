import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 65px;
  width: 100%;

  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  // Container
  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  > div > img {
    display: none;
  }

  > div > div {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  @media (min-width: 666px) {
    > div {
      justify-content: space-between;
    }
    > div > img {
      display: block;
    }
  }
`;
