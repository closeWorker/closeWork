import React, { useContext } from "react";
import { Title } from "../../../../components/Title";
import { ServiceContext } from "../../../../context/ServiceContext";
import { StyledCard, StyledStars } from "./style";
import { iServiceCardProps } from "./type";
import whatsappIcon from "../../../../assets/whatsapp-icon.svg";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { ImgProfile } from "../../../../components/ImgProfile";
import { LinkNavigation } from "../../../../components/LinkNavigation";
import Rating from "@mui/material/Rating";

export const ServiceCard = ({ service }: iServiceCardProps) => {
  const { listComments, whatsNumber } = useContext(ServiceContext);

  const ratingList = listComments.filter(
    (comment) => comment.serviceId === service.id
  );

  let averageRate;
  ratingList.length !== 0
    ? (averageRate =
        ratingList.reduce(
          (currentSum, currentRate) => currentSum + currentRate.service_rating,
          0
        ) / ratingList.length)
    : (averageRate = "Sem avaliações no momento");

  return (
    <StyledCard key={service.id}>
      <div>
        <ImgProfile
          alt="Foto do trabalhador"
          srcLink={service.service_provider_avatar}
          type="home"
        />
      </div>
      <div>
        <Title type="Headline" colorTitle="blue-1">
          Nome do prestador
        </Title>
        <Title type="Body-600" colorTitle="blue-1">
          {service.service_provider}
        </Title>
      </div>
      <div>
        <Title type="Headline" colorTitle="blue-1">
          Tipo de serviço
        </Title>
        <Title type="Body-600" colorTitle="blue-1">
          {service.kind_of_service}
        </Title>
      </div>
      <div>
        <Title type="Headline" colorTitle="blue-1">
          Contato
        </Title>
        <Title type="Body-600" colorTitle="blue-1">
          {service.phone_number}
        </Title>
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsNumber(
            service.phone_number
          )}`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Ícone do whatsappp" />
        </a>
      </div>
      <div>
        <Title type="Headline" colorTitle="blue-1">
          Avaliações:
        </Title>
        {typeof averageRate === "string" ? (
          <Title type="Body-600" colorTitle="blue-1">
            {averageRate}
          </Title>
        ) : (
          <StyledStars>
            <Rating
              name="half-rating-read"
              value={averageRate}
              precision={0.5}
              readOnly
            />
            <Title type="Headline" colorTitle="blue-1">
              ({averageRate.toFixed(2).toString().replace(".", ",")})
            </Title>
          </StyledStars>
        )}
      </div>
      <LinkNavigation
        linkTo={`/more_infos/${service.id}`}
        name="Ver mais"
        style="blueDark"
      />
    </StyledCard>
  );
};
