import logo from "../../assets/logo-header.svg";
import { Button } from "../Button";
import { StyledHeader } from "./style";

export const HeaderDashboard = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Imagem de logo do site Close Worker" />
      <Button type="button" style="blueLight">
        Logout
      </Button>
    </StyledHeader>
  );
};
