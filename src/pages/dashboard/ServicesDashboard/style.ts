import styled from "styled-components";

export const StyledServicesDashboard = styled.main`
  display: flex;
  flex-direction: column;

  div:nth-child(3) {
    min-height: 100px;
  }
`;

export const StyledService = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-2);
`;

export const StyledServices = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;

  background-color: var(--color-neutral-white);

  gap: 25px;
  padding: 20px 10px;
  overflow: auto;
  height: fit-content;
  margin-bottom: 40px;
  align-items: center;

  li {
    background-color: var(--color-blue-6);
    gap: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px 0;
    width: 100%;
    min-width: 260px;
    max-width: 340px;
    text-align: center;
    border-radius: 4px;

    div:nth-child(1) {
      height: 70px;
    }

    @media (min-width: 376px) {
      min-width: 340px;
    }
  }
  @media (min-width: 768px) {
    overflow-y: hidden;

    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1100px) {
    max-height: fit-content;
  }
`;

export const StyledHeaderServices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  div {
    width: 10%;
  }
  h2 {
    font-style: 18px;
    font-weight: 500;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    button {
      width: 100%;
    }
  }
  button {
    padding: 10px 40px;
    height: max-content;
  }
`;

export const StyledRegisterServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 10px;
  text-align: center;

  button {
    padding: 10px 60px;
    height: max-content;
  }
`;

export const ContainerHome = styled.div`
  width: 1200px;
  max-width: 100%;

  padding: 0 16px;

  margin: 0 auto;

  & > h3 {
    padding-top: 5px;
    text-align: center;
  }
`;
