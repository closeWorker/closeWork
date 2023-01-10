import styled from "styled-components";

export const StyledContainerFull = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--color-blue-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 0;
`;

export const StyledContainerSlide = styled.section`
  width: 1320px;
  max-width: 100%;
  min-width: 261px;

  padding: 0 16px;

  margin: 0 auto;
  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 200px;
    object-fit: cover;
  }
`;
