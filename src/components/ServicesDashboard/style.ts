import styled from "styled-components";

export const StyledServicesDashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledService = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-2);
  color: var(--color-neutral-white);
`;

export const StyledServices = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-white);
  gap: 10px;
  padding: 20px 10px;
  li {
    background-color: var(--color-blue-6);
    gap: 50px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
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
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
