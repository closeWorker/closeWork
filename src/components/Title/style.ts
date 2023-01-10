import styled from "styled-components";
import { iPropsTitle } from "./type";

const functionSelectTitleColor = (props: string) => {
  switch (props) {
    case "blue-1":
      return "var(--color-blue-1)";
      break;
    case "blue-2":
      return "var(--color-blue-6)";
      break;
    case "white":
      return "var(--color-neutral-white)";
      break;
    case "sucess":
      return "var(--color-sucess)";
      break;
    case "negative":
      return "var(--color-negative-hover)";
      break;
  }
};

export const StyledHeading1 = styled.h2<iPropsTitle>`
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledHeading2 = styled.h3<iPropsTitle>`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledHeading3 = styled.h4<iPropsTitle>`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledHeadline = styled.p<iPropsTitle>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledBody = styled.p<iPropsTitle>`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledBody600 = styled.p<iPropsTitle>`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledCaption = styled.p<iPropsTitle>`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;
