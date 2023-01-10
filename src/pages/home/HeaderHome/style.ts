import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 122px;

  background: var(--color-neutral-white);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;

  /* margin-bottom: 55px; */

  @media (min-width: 518) {
    height: 89px;

    box-shadow: none;

    margin-bottom: 0;
  }

  /* Container */
  > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 18px;
    @media (min-width: 518px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
  }

  > div > div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
  }

  > div > div:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 518px) {
      justify-content: center;
    }
  }
`;
