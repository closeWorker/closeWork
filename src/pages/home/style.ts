import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
`;

export const ContainerHome = styled.div`
  width: 1320px;
  max-width: 100%;
  min-width: 261px;

  padding: 0 16px;

  margin: 0 auto;
`;
export const StyledPicturesDiv = styled.div`
  height: 384px;

  background: var(--color-blue-2);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;

  div {
    display: flex;
    gap: 12px;

    overflow-x: auto;
  }
`;

export const StyledFilterSection = styled.section`
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 420px) {
    border-bottom: 60px solid var(--color-blue-2);
    margin-bottom: 30px;
  }

  div {
    width: 375px;
    max-width: 100%;
    height: 101px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
