import { Title } from "../../../components/Title";
import { StyledContainerStars, StyledDescription } from "./style";
import star from "../../../assets/star.svg";
import { iListComments, iListServiceHome } from "../../../context/type";
import Rating from "@mui/material/Rating";

export interface iPropsDescriptionMoreInfo {
  service: iListServiceHome;
  listComments: iListComments[];
}
export const DescriptionService = ({
  service,
  listComments,
}: iPropsDescriptionMoreInfo) => {
  let averageRate;

  const ratingReduce = (
    listComments.reduce(
      (currentSum, currentRate) => currentSum + currentRate.service_rating,
      0
    ) / listComments.length
  ).toFixed(1);

  listComments.length !== 0
    ? (averageRate = Number(ratingReduce))
    : (averageRate = "Sem avaliações no momento");

  return (
    <StyledDescription>
      <div>
        <div>
          <Title colorTitle="blue-1" type="Heading2">
            Tipo de serviço:
          </Title>
          <Title colorTitle="blue-1" type="Headline">
            {service.kind_of_service}
          </Title>
        </div>
        <div>
          <Title colorTitle="blue-1" type="Heading2">
            Avaliação:
          </Title>
          <StyledContainerStars>
            {typeof averageRate === "string" ? (
              <Title type="Body-600" colorTitle="blue-1">
                {averageRate}
              </Title>
            ) : (
              <StyledContainerStars>
                <Rating
                  name="half-rating-read"
                  value={averageRate}
                  precision={0.5}
                  readOnly
                />
                <Title type="Heading3" colorTitle="blue-1">
                  ({averageRate.toFixed(2).toString().replace(".", ",")})
                </Title>
              </StyledContainerStars>
            )}
          </StyledContainerStars>
        </div>

        <Title colorTitle="blue-1" type="Heading2">
          Descrição do serviço:
        </Title>
        <Title colorTitle="blue-1" type="Headline">
          {service.description}
        </Title>
      </div>
    </StyledDescription>
  );
};
