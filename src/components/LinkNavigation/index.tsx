import { iLinkProps } from "./type";
import { StyledLink } from "./style";

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
