import React from "react";
import { StyledHeader } from "./style";
import LogoSmall from "../../assets/logo-reduzida.svg";
import { LinkNavigation } from "../LinkNavigation";
import { ContainerHome } from "../../styles/Container";

export const HeaderHome = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <img src={LogoSmall} alt="Logo Close Workers" />
        <div>
          <LinkNavigation linkTo="/register" style="blueDark">
            Cadastrar
          </LinkNavigation>
          <LinkNavigation linkTo="/login" style="blueLight">
            Login
          </LinkNavigation>
        </div>
      </ContainerHome>
    </StyledHeader>
  );
};
