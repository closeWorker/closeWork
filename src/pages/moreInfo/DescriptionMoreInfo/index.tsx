import { Title } from "../../../components/Title";
import { StyledContainerStars, StyledDescription } from "./style";
import star from "../../../assets/star.svg"

export const DescriptionMoreInfo = () => {
  return (
    <StyledDescription>
      <div>
        <Title colorTitle="blue-1" type="Heading2">
        Pedreiro
        </Title>
        <StyledContainerStars>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <Title colorTitle="blue-1" type="Heading3">5,0</Title>
          </StyledContainerStars>
        <Title colorTitle="blue-1" type="Headline">
          Trabalho com pintura, alvenaria Trabalho com pintura, alvenariaTrabalho com pintura, alvenariaTrabalho com pintura, alvenariaTrabalho com pintura, alvenariaTrabalho com pintura, alvenariaTrabalho com pintura, alvenariaTrabalho com pintura, alvenariaTrabalho com pintura, alvenaria
        </Title>
      </div>
    </StyledDescription>
  );
};
