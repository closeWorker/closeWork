import logo from "../../assets/logo-header.svg";
import { ContainerHome } from "../../styles/Container";
import { Button } from "../Button";
import { StyledContent, StyledHeader } from "./style";

export const HeaderDashboard = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <Button type="button" style="blueLight">
            Logout
          </Button>
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
