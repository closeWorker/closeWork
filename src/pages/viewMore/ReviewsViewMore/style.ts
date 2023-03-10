import styled from "styled-components";

export const ContainerListComments = styled.div`
  width: 1200px;
  max-width: 100%;

  padding: 20px 16px;

  margin: 0 auto;

  ul {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
  }

  li {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    min-height: 150px;
    max-height: 250px;
    overflow: auto;
    background-color: var(--color-blue-5);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 4px;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export const ContainerListNoComments = styled.div`
  width: 1200px;
  max-width: 100%;

  padding: 20px 16px;

  margin: 0 auto;

  & > div {
    margin-bottom: 40px;

    text-align: center;
  }
`;
