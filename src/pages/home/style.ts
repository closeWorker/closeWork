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

export const StyledHome = styled.main`
  > div:nth-child(1) {
    height: 384px;

    background: var(--color-blue-2);

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
  }
  > div:nth-child(1) > div {
    display: flex;
    gap: 12px;

    overflow-x: auto;
  }

  > div:nth-child(2) {
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 420px) {
      border-bottom: 60px solid var(--color-blue-2);
      margin-bottom: 30px;
    }
  }
  > div:nth-child(2) > div {
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

  > div:nth-child(3) {
    margin-bottom: 12px;
  }
`;
