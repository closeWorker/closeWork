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
  height: fit-content;
  padding: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  fieldset {
    width: 375px;
    max-width: 100%;
    height: 101px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border: none;
  }
  fieldset > label {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-blue-2);
  }
  fieldset > select {
    height: 42px;
    background-color: var(--color-blue-6);
    color: var(--color-blue-1);
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 0 15px;
    border-radius: 4px;
    border: none;
  }
`;
