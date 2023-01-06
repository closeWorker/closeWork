import {
  StyledRegisterServices,
  StyledService,
  StyledServices,
  StyledServicesDashboard,
} from "./style";
import { Button } from "../Button";
import { ContainerHome } from "../../styles/Container";
import { CardDashboard } from "../cardDashboard";
import { Title } from "../Title";

export const ServicesDashboard = () => {
  return (
    <StyledServicesDashboard>
      <StyledRegisterServices>
        <Title
          children="Para cadastrar um novo serviço pressione o botão abaixo"
          type="Body-600"
          colorTitle="blue-1"
        />
        <Button style="blueDark" type="button" name="Cadastar" />
      </StyledRegisterServices>
      <StyledService>
        <Title children="Serviços" type="Heading2" colorTitle="blue-2" />
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
