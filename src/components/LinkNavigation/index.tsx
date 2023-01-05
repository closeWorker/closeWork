import { ReactNode } from "react";
import { StyledLink } from "./style";

interface iButtonProps {
  to: string;
  style: "blueDark" | "blueLight" | "delete" | "icon";
  children?: ReactNode;
}

export const LinkNavigation = ({ to, style, children }: iButtonProps) => {
  return (
    <StyledLink to={to} variant={style}>
      {children}
    </StyledLink>
  );
};
