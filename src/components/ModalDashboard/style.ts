import styled, { css } from "styled-components";
import { AnimationFade, AnimationFadeOut } from "../../styles/animation";
import { iStyledModalProps } from "./type";

export const Modal = styled.div<iStyledModalProps>`
  width: 100vw;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  > div {
    ${({ isClosing }) => {
      if (isClosing) {
        return css`
          animation: ${AnimationFadeOut} 0.3s forwards;
        `;
      } else {
        return css`
          animation: ${AnimationFade} 0.3s forwards;
        `;
      }
    }}
  }
`;

export const DivModal = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 660px;

  position: sticky;
  top: 30px;

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
