import { useContext } from "react";
import { HeaderHome } from "./HeaderHome";
import { ContainerHome, PageContainer, StyledHome } from "./style";
import worker1 from "../../assets/worker-1.svg";
import worker2 from "../../assets/worker-2.svg";
import worker3 from "../../assets/worker-3.svg";
import worker4 from "../../assets/worker-4.svg";
import worker5 from "../../assets/worker-5.svg";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { ServicesList } from "./ServicesList";
import { ServiceContext } from "../../context/ServiceContext";
import { kindOfServices } from "../../context/kindOfServices";

export const Home = () => {
  const { setKindOfServicesSelectedHome } = useContext(ServiceContext);

  return (
    <PageContainer>
      <HeaderHome />
      <StyledHome>
        <div>
          <ContainerHome>
            <img src={worker1} alt="" />
            <img src={worker2} alt="" />
            <img src={worker3} alt="" />
            <img src={worker4} alt="" />
            <img src={worker5} alt="" />
          </ContainerHome>
        </div>
        <div>
          <div>
            <Title type="Heading3" colorTitle="blue-1">
              Filtrar por tipo de serviço
            </Title>
            <select
              onChange={(event) =>
                setKindOfServicesSelectedHome(event.target.value)
              }
            >
              {kindOfServices.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ContainerHome>
          <ServicesList />
        </ContainerHome>
      </StyledHome>
      <Footer />
    </PageContainer>
  );
};
