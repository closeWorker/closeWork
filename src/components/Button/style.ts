import styled from "styled-components";

interface iPropsButton {
  variant: "blueDark" | "blueLight" | "delete" | "icon";
}

const switchStyleButton = (style: string) => {
  switch (style) {
    case "blueDark":
      return `
        color: var(--color-neutral-white);
        background-color: var(--color-blue-3);
        border: 2px solid var(--color-blue-3);
      
        &:hover {
          border: 2px solid var(--color-blue-2);
          background-color: var(--color-blue-2);
        }
      
        &:disabled {
          border: 2px solid var(--color-blue-1);
          background-color: var(--color-blue-1);
        }
        `;
      break;
    case "blueLight":
      return `
        color: var(--color-blue-1);
        background-color: var(--color-blue-6);
        border: 2px solid var(--color-blue-6);
      
        &:hover {
          border: 2px solid var(--color-blue-5);
          background-color: var(--color-blue-5);
        }
        `;
      break;
    case "delete":
      return `
        color: var(--color-neutral-white);
        background-color: var(--color-negative);
        border: 2px solid var(--color-negative);
      
        &:hover {
          border: 2px solid var(--color-negative-hover);
          background-color: var(--color-negative-hover);
        }
        `;
      break;
    case "icon":
      return `
        border: none;
        background-color: var(--color-neutral-white);;
        border-radius: 100%;
        padding: 0 10px;
      
        &:hover {
          background-color: var(--color-gray-9);
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
