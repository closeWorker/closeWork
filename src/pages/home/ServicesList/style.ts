import styled from "styled-components";

export const WarningTextBox = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
`;

export const StyledList = styled.ul`
  display: flex;
  /* justify-content: center; */
  align-items: stretch;
  flex-wrap: wrap;
  gap: 21px;

  padding-bottom: 62px;

  max-height: 600px;

  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 420px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
    justify-items: center;

    max-height: none;

    overflow: visible;
  }
`;
