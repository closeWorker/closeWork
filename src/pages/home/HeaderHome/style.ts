import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 122px;

  background: var(--color-neutral-white);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;

  @media (min-width: 518) {
    height: 89px;

    box-shadow: none;

    margin-bottom: 0;
  }

  > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 18px;
    @media (min-width: 550px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
  }

  > div > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    @media (min-width: 550px) {
      justify-content: flex-end;
    }
  }

  > div > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 550px) {
      justify-content: center;
    }
  }

  a {
    width: 120px;
  }
`;
