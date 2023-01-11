import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DivModal = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 660px;
  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }
  input {
    @media (max-width: 700px) {
      width: 95%;
      margin: 0 auto;
    }
  }
  textarea {
    @media (max-width: 700px) {
      width: 95%;
      margin: 0 auto;
    }
  }
`;
