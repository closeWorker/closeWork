import styled from "styled-components";

export const WarningTextBox = styled.div`
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 21px;

  padding-bottom: 62px;

  max-height: 438px;

  overflow-y: scroll;
  overflow-x: unset;

  @media (min-width: 420px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
    justify-items: center;

    overflow: unset;
    max-height: none;
  }
`;
