import React, { useContext } from "react";
import { Button } from "../../../components/Button";
import { Title } from "../../../components/Title";
import { ServiceContext } from "../../../context/ServiceContext";
import { ServiceCard } from "./ServiceCard";
import { StyledList, WarningTextBox } from "./style";

export const ServicesList = () => {
  const { filteredServicesHome: services, loadingListServiceHome: loading } =
    useContext(ServiceContext);
  return (
    <>
      {services.length === 0 && (
        <WarningTextBox>
          {loading ? (
            <Title type="Heading3" colorTitle="blue-1">
              Carregando ...
            </Title>
          ) : (
            <Title type="Heading3" colorTitle="blue-1">
              Nenhum serviço deste tipo encontrado no momento.
            </Title>
          )}
        </WarningTextBox>
      )}
      <StyledList>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </StyledList>
    </>
  );
};
