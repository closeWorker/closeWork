import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 1251px;
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

    @media (min-width: 666px) {
      border-bottom: 60px solid var(--color-blue-2);
    }

    margin-bottom: 30px;
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
  > div:nth-child(3) > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 21px;

    @media (min-width: 648px) {
      justify-content: space-between;
    }
  }
  > div:nth-child(3) > ul > li {
    width: 289px;
    height: 375px;

    padding: 14px 12px 27px 12px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border: 1px solid var(--color-blue-3);

    border-bottom: 1px solid var(--color-blue-3);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div:nth-child(3) > ul > li > div:nth-child(1),
  > div:nth-child(3) > ul > li > div:nth-child(2),
  > div:nth-child(3) > ul > li > div:nth-child(3) {
    border-bottom: 1px solid var(--color-blue-3);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > div:nth-child(3) > ul > li > div:nth-child(1) > p:nth-child(2),
  > div:nth-child(3) > ul > li > div:nth-child(2) > p:nth-child(2),
  > div:nth-child(3) > ul > li > div:nth-child(3) > p:nth-child(2) {
    margin-bottom: 15px;
  }
`;
