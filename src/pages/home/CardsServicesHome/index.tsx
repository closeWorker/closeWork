import React from "react";
import { Button } from "../../../components/Button";
import { Title } from "../../../components/Title";
import { iService } from "../type";
import { StyledDiv } from "./style";
import { iCardServicesHomeProps } from "./type";

export const CardsServicesHome = ({
  services,
  loading,
}: iCardServicesHomeProps) => {
  return (
    <>
      {services.length === 0 ? (
        <StyledDiv>
          <Title type="Headline" colorTitle="blue-1">
            {loading
              ? "Carregando ..."
              : " Nenhum serviço deste tipo encontrado no momento"}
          </Title>
        </StyledDiv>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
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
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
