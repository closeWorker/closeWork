import React, { useContext } from "react";
import { Button } from "../../../../components/Button";
import { Title } from "../../../../components/Title";
import { ServiceContext } from "../../../../context/ServiceContext";
import { StyledCard } from "./style";
import { iServiceCardProps } from "./type";
import whatsappIcon from "../../../../assets/whatsapp-icon.svg";

export const ServiceCard = ({ service }: iServiceCardProps) => {
  const whatsNumber = (phoneNumber: string) =>
    `55${phoneNumber.replace(/[()\ \s-]+/g, "")}`;

  return (
    <StyledCard key={service.id}>
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
      <Button name="Ver mais" type="button" style="blueDark" />
    </StyledCard>
  );
};
