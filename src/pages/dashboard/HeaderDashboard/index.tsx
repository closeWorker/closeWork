import { useContext } from "react";
import logo from "../../../assets/logo-header.svg";
import { UserContext } from "../../../context/UserContext";
import { Button } from "../../../components/Button";
import { StyledContent, StyledHeader } from "./style";
import { ContainerHome } from "./style";

export const HeaderDashboard = () => {
  const { handleLogout } = useContext(UserContext);
  return (
    <StyledHeader>
      <ContainerHome>
        <StyledContent>
          <img src={logo} alt="Imagem de logo do site Close Worker" />
          <Button
            type="button"
            style="blueLight"
            name="Logout"
            action={handleLogout}
          />
        </StyledContent>
      </ContainerHome>
    </StyledHeader>
  );
};
