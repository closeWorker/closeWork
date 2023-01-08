import styled from "styled-components";

export const Header = styled.div`
  background-color: var(--color-blue-1);
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  & > img {
    width: 90px;
  }
  button {
    color: white;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
  }
`;
