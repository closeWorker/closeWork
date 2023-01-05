import { Link } from "react-router-dom";
import styled from "styled-components";

interface iPropsLink {
  variant: "blueDark" | "blueLight" | "icon";
}

const switchStyleLink = (style: string) => {
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

export const StyledLink = styled(Link)<iPropsLink>`
  cursor: pointer;

  height: 40px;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  text-decoration: none;

  border-radius: 4px;
  padding: 10px 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  transition: 500ms linear;

  ${({ variant }) => {
    return switchStyleLink(variant);
  }}

  @media (min-width: 1400px) {
    height: 50px;
    padding: 15px 20px;
  }
`;
