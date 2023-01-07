import { Link } from "react-router-dom";
import logo from "../../assets/logo-header.svg";
import { ContainerHome } from "../../styles/Container";
import { Button } from "../Button";
import { StyledContent, StyledHeader } from "./style";

export const HeaderViewMore = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <Link to={"/dashboard"}>
            <Button type="button" style="blueLight">
              Voltar a dashboard
            </Button>
          </Link>
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
