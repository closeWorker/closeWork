import styled from "styled-components";

export const StyledDescription = styled.section`
  width: 1200px;
  max-width: 100%;

  padding: 20px 16px;

  margin: 0 auto;
  & > div {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    min-height: 150px;
    background-color: var(--color-blue-5);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 4px;
    & > div {
      display: flex;
      gap: 10px;
    }
  }
`;

export const StyledContainerStars = styled.div`
  display: flex;
  gap: 5px;

  img {
    width: 20px;
    height: 20px;
  }
`;
