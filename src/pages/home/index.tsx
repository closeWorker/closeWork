import { useContext, useEffect } from "react";
import { HeaderHome } from "./HeaderHome";
import {
  ContainerHome,
  PageContainer,
  StyledFilterSection,
  StyledPicturesDiv,
} from "./style";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { ServicesList } from "./ServicesList";
import { ServiceContext } from "../../context/ServiceContext";
import { kindOfServices } from "../../context/kindOfServices";
import { api } from "../../services/api";
import worker1 from "../../assets/worker-1.svg";
import worker2 from "../../assets/worker-2.svg";
import worker3 from "../../assets/worker-3.svg";
import worker4 from "../../assets/worker-4.svg";
import worker5 from "../../assets/worker-5.svg";

export const Home = () => {
  const {
    setKindOfServicesSelectedHome,
    setListServiceHome,
    setLoadingListServiceHome,
  } = useContext(ServiceContext);

  useEffect(() => {
    const requestServices = async () => {
      try {
        const response = await api.get("services");
        setListServiceHome(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingListServiceHome(false);
      }
    };
    requestServices();
  }, []);

  return (
    <PageContainer>
      <HeaderHome />
      <main>
        <StyledPicturesDiv>
          <ContainerHome>
            <img src={worker1} alt="" />
            <img src={worker2} alt="" />
            <img src={worker3} alt="" />
            <img src={worker4} alt="" />
            <img src={worker5} alt="" />
          </ContainerHome>
        </StyledPicturesDiv>
        <StyledFilterSection>
          <fieldset>
            <label htmlFor="filter">Filtrar por tipo de serviço</label>
            <select
              id="filter"
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
          </fieldset>
        </StyledFilterSection>
        <section>
          <ContainerHome>
            <ServicesList />
          </ContainerHome>
        </section>
      </main>
      <Footer />
    </PageContainer>
  );
};
