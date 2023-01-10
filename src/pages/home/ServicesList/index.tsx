import { useContext } from "react";
import { Title } from "../../../components/Title";
import { ServiceContext } from "../../../context/ServiceContext";
import { ServiceCard } from "./ServiceCard";
import { StyledList, WarningTextBox } from "./style";
import { Oval } from "react-loader-spinner";

export const ServicesList = () => {
  const { filteredServicesHome: services, loadingListServiceHome: loading } =
    useContext(ServiceContext);
  return (
    <>
      {services.length === 0 && (
        <WarningTextBox>
          {loading ? (
            <Oval
              height={80}
              width={80}
              color="#263F6D"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#6487C8"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
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
