import {
  StyledRegisterServices,
  StyledService,
  StyledServices,
  StyledServicesDashboard,
} from "./style";
import { Button } from "../Button";
import { ContainerHome } from "../../styles/Container";
import { CardDashboard } from "../cardDashboard";

export const ServicesDashboard = () => {
  return (
    <StyledServicesDashboard>
      <StyledRegisterServices>
        <p>Para cadastrar um novo serviço pressione o botão abaixo</p>
        <Button style="blueDark" type="button" name="Cadastar" />
      </StyledRegisterServices>
      <StyledService>
        <h2>Serviços</h2>
      </StyledService>
      <ContainerHome>
        <StyledServices>
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
        </StyledServices>
      </ContainerHome>
    </StyledServicesDashboard>
  );
};
