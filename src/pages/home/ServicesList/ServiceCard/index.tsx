import React, { useContext } from "react";
import { Button } from "../../../../components/Button";
import { Title } from "../../../../components/Title";
import { ServiceContext } from "../../../../context/ServiceContext";
import { StyledCard } from "./style";
import { iServiceCardProps } from "./type";

export const ServiceCard = ({ service }: iServiceCardProps) => {
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
      </div>
      <Button name="Ver mais" type="button" style="blueDark" />
    </StyledCard>
  );
};
