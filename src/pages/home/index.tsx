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
import { SlideImagesHome } from "../../components/SlideImagesHome";
import { toast } from "react-toastify";

export const Home = () => {
  const {
    setKindOfServicesSelectedHome,
    setListServiceHome,
    setLoadingListServiceHome,
    setListComments,
  } = useContext(ServiceContext);

  useEffect(() => {
    const requestServices = async () => {
      try {
        const response = await api.get("services");
        setListServiceHome(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro na requisição dos serviços");
      }
    };

    const requestComments = async () => {
      try {
        const response = await api.get("comments");
        setListComments(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Erro na requisição dos comentários");
      } finally {
        setLoadingListServiceHome(false);
      }
    };

    requestServices();
    requestComments();
  }, []);

  return (
    <PageContainer>
      <HeaderHome />
      <main>
        <SlideImagesHome />
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
