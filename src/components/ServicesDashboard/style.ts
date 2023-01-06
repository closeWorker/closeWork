import styled from "styled-components";

export const StyledServicesDashboard = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  align-items: center;
  background-color: var(--color-neutral-white);
  gap: 10px;
  padding: 20px 10px;
  overflow-y: scroll;
  max-height: 450px;
  @media (min-width: 666px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
  }
  @media (min-width: 1100px) {
    overflow-y: hidden;
  }
  li {
    background-color: var(--color-blue-6);
    gap: 50px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;
    border-radius: 4px;
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
  /* p {
    font-weight: 600;
    font-style: 16px;
  } */
  button {
    padding: 10px 60px;
    height: max-content;
  }
`;
