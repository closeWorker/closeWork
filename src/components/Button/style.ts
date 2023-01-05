import styled from "styled-components";

interface iPropsButton {
  variant: "blueDark" | "blueLight" | "delete" | "icon";
}

const switchStyleButton = (style: string) => {
  switch (style) {
    case "blueDark":
      return `
        color: #ffffff;
        background-color: #3a60a6;
        border: 2px solid #3a60a6;
      
        &:hover {
          border: 2px solid #263f6d;
          background-color: #263f6d;
        }
      
        &:disabled {
          border: 2px solid var(--color-primary-disableb);
          background-color: var(--color-primary-disableb);
        }
        `;
      break;
    case "blueLight":
      return `
        color: #111c31;
        background-color: #d5def0;
        border: 2px solid #d5def0;
      
        &:hover {
          border: 2px solid #a0b6dd;
          background-color: #a0b6dd;
        }
        `;
      break;
    case "delete":
      return `
        color: #ffffff;
        background-color: #f03e3e;
        border: 2px solid #f03e3e;
      
        &:hover {
          border: 2px solid #b43f3f;
          background-color: #b43f3f;
        }
        `;
      break;
    case "icon":
      return `
        border: none;
        background-color: #ffffff;
        border-radius: 100%;
        padding: 0 10px;
      
        &:hover {
          background-color: #f1f3f5;
        }
        svg {
          width: 2em;
          height: 2em;
        }
        `;
      break;
  }
};

export const StyledButton = styled.button<iPropsButton>`
  cursor: pointer;

  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  padding: 0 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  transition: 500ms linear;

  ${({ variant }) => {
    return switchStyleButton(variant);
  }}

  @media (min-width: 1400px) {
    height: 50px;
  }
`;
