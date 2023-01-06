import React from "react";
import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledHeader } from "./style";
import logoHeader from "../../../assets/logo-home-header.svg";
import { ContainerHome } from "../style";

export const HeaderHome = () => {
  return (
    <StyledHeader>
      <ContainerHome>
        <div>
          <LinkNavigation
            name="Cadastrar"
            linkTo="/register"
            style="blueDark"
          />
          <LinkNavigation name="Login" linkTo="/login" style="blueLight" />
        </div>
        <div>
          <img src={logoHeader} alt="Imagem de logo do site Close Worker" />
        </div>
      </ContainerHome>
    </StyledHeader>
  );
};
