import React from "react";
import { StyledHeader } from "./style";
import LogoSmall from "../../assets/logo-reduzida.svg";
import { LinkNavigation } from "../LinkNavigation";
import { ContinerHome } from "../../styles/Container";

export const HeaderHome = () => {
  return (
    <StyledHeader>
      <ContinerHome>
        <img src={LogoSmall} alt="Logo Close Workers" />
        <div>
          <LinkNavigation to="register" style="blueDark">
            Cadastrar
          </LinkNavigation>
          <LinkNavigation to="login" style="blueLight">
            Login
          </LinkNavigation>
        </div>
      </ContinerHome>
    </StyledHeader>
  );
};
