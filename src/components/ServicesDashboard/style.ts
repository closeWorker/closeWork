import styled from "styled-components";

export const StyledServicesDashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledService = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-blue-6);
`;

export const StyledServices = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-blue-6);
  .content {
    margin: 10px;
    background-color: var(--color-neutral-white);
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
