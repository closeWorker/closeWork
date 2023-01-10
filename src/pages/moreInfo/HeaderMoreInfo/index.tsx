import logo from "../../../assets/logo-header.svg";
import { Button } from "../../../components/Button";
import { StyledContent, StyledHeader } from "./style";
import { ContainerHome } from "../style";
import { LinkNavigation } from "../../../components/LinkNavigation";

export const HeaderMoreInfo = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <LinkNavigation linkTo="/home" name="Home" style="blueLight" />
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
