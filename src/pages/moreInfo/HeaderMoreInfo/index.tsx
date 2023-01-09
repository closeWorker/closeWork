import logo from "../../../assets/logo-header.svg";
import { Button } from "../../../components/Button";
import { StyledContent, StyledHeader } from "./style";
import { ContainerHome } from "../style";

export const HeaderMoreInfo = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <Button
            type="button"
            style="blueLight"
            name="Home"
          />
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
