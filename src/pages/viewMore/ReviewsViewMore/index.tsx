import { Title } from "../../../components/Title";
import { ContainerListComments, ContainerListNoComments } from "./style";
import star from "../../../assets/star.svg";
import { iPropsListComments } from "../type";
import { StyledContainerStars } from "../DescriptionService/style";
import Rating from "@mui/material/Rating";

export const ReviewViewMore = ({ listCommentsProp }: iPropsListComments) => {
  return (
    <>
      {listCommentsProp.length > 0 ? (
        <ContainerListComments>
          <ul>
            {listCommentsProp.map((list, index) => {
              return (
                <li key={index}>
                  <div>
                    <Title colorTitle="blue-1" type="Heading3">
                      Nome:
                    </Title>
                    <Title colorTitle="blue-1" type="Headline">
                      {list.name}
                    </Title>
                  </div>
                  <div>
                    <Title colorTitle="blue-1" type="Heading3">
                      Avaliação:
                    </Title>
                    <StyledContainerStars>
                      <Rating
                        name="half-rating-read"
                        value={list.service_rating}
                        precision={0.5}
                        readOnly
                      />
                      <Title type="Headline" colorTitle="blue-1">
                        (
                        {Number(list.service_rating)
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}
                        )
                      </Title>
                    </StyledContainerStars>
                  </div>

                  <Title colorTitle="blue-1" type="Heading3">
                    Comentário:
                  </Title>
                  <Title colorTitle="blue-1" type="Headline">
                    {list.comment}
                  </Title>
                </li>
              );
            })}
          </ul>
        </ContainerListComments>
      ) : (
        <ContainerListNoComments>
          <div>
            <Title colorTitle="blue-1" type="Heading2">
              Não existe comentários cadastrados para esse serviço
            </Title>
          </div>
        </ContainerListNoComments>
      )}
    </>
  );
};
