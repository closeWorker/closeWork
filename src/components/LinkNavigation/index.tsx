import { ReactNode } from "react";
import { StyledLink } from "./style";

interface iLinkProps {
  name: string;
  linkTo: string;
  style: "blueDark" | "blueLight" | "icon";
  children?: ReactNode;
}

export const LinkNavigation = ({
  name,
  linkTo,
  style,
  children,
}: iLinkProps) => {
  return (
    <StyledLink to={linkTo} variant={style}>
      {name}
      {children}
    </StyledLink>
  );
};
