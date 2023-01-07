import styled from "styled-components";

export const StyledDescriptionService = styled.div`
  display: flex;
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
  @media (min-width: 666px) {
    padding: 15px 75px;
  }
`;
