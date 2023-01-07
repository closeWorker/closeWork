import { StyledDescription, StyledDescriptionService } from "./style";
import { ContainerHome } from "../../styles/Container";
import { Title } from "../Title";

export const DescriptionService = () => {
  return (
    <StyledDescriptionService>
      <ContainerHome>
        <StyledDescription>
          <Title children="Pedreiro" colorTitle="blue-1" type="Heading2" />
          <Title
            children="Breve descrição do serviço. EX: Trabalho com reformas e contrução"
            type="Headline"
            colorTitle="blue-1"
          />
        </StyledDescription>
      </ContainerHome>
    </StyledDescriptionService>
  );
};
