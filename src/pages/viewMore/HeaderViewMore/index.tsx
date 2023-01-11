import logo from "../../../assets/logo-header.svg";
import { StyledContent, StyledHeader } from "./style";
import { LinkNavigation } from "../../../components/LinkNavigation";
import { ContainerHome } from "../../dashboard/style";

export const HeaderViewMore = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <LinkNavigation
            linkTo="/dashboard"
            name="Dashboard"
            style="blueLight"
          />
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
