import styled from "styled-components";

export const StyledCard = styled.li`
  width: 298px;
  max-width: 100%;
  height: 375px;

  padding: 14px 12px 27px 12px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: 1px solid var(--color-blue-3);

  border-bottom: 1px solid var(--color-blue-3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    border-bottom: 1px solid var(--color-blue-3);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p:nth-child(2) {
    margin-bottom: 15px;
  }
`;