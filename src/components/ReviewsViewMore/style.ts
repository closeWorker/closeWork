import styled from "styled-components";

export const StyledDescriptionService = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  background-color: var(--color-blue-5);
  width: 100%;
  min-height: 150px;
  height: max-content;
  margin: 30px auto;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;
  p {
    padding: 0 10px;
  }
  @media (min-width: 666px) {
    padding: 15px 75px;
  }
`;

export const StyledService = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-2);
`;

export const StyledStars = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  path {
    color: var(--color-star-yellow);
  }
  p {
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
  }
`;
