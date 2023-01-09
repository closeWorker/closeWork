import { Title } from "../../../components/Title";
import { StyledContainerStars } from "../DescriptionMoreInfo/style";
import { ContainerListComments } from "./style";
import star from "../../../assets/star.svg"

export const ListComments = () => {
  return (
    <ContainerListComments>
      <ul>
        <li>
          <Title colorTitle="blue-1" type="Heading2">
            João
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
            É um bom trabalhador É um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhador
          </Title>
        </li>
        <li>
          <Title colorTitle="blue-1" type="Heading2">
            João
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
            É um bom trabalhador É um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhadorÉ um bom trabalhador
          </Title>
        </li>
      </ul>
    </ContainerListComments>
  );
};
