import {
  StyledDescription,
  StyledDescriptionService,
  StyledService,
  StyledStars,
} from "./style";
import { ContainerHome } from "../../styles/Container";
import { Title } from "../Title";
import { RiStarFill } from "react-icons/ri";

export const ReviewViewMore = () => {
  return (
    <StyledDescriptionService>
      <StyledService>
        <Title children="Depoimentos" type="Heading2" colorTitle="blue-2" />
      </StyledService>
      <ContainerHome>
        <StyledDescription>
          <Title
            children="Nome depoimento"
            colorTitle="blue-1"
            type="Heading2"
          />
          <Title
            children="Breve descrição do serviço. EX: Trabalho com reformas e contrução"
            type="Headline"
            colorTitle="blue-1"
          />
          <StyledStars>
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <p>5,0</p>
          </StyledStars>
        </StyledDescription>
        <StyledDescription>
          <Title
            children="Nome depoimento"
            colorTitle="blue-1"
            type="Heading2"
          />
          <Title
            children="Breve descrição do serviço. EX: Trabalho com reformas e contrução"
            type="Headline"
            colorTitle="blue-1"
          />
          <StyledStars>
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <RiStarFill size={30} />
            <p>5,0</p>
          </StyledStars>
        </StyledDescription>
      </ContainerHome>
    </StyledDescriptionService>
  );
};
