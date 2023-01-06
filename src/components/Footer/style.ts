import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  background-color: var(--color-blue-2);

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-neutral-white);
  }
`;
