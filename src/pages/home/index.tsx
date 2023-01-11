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
import { api } from "../../services/api";
import { SlideImagesHome } from "../../components/SlideImagesHome";
import { toast } from "react-toastify";
import { FramerMotionHomeDashboardMoreInfo } from "../../components/FramerMotion";

export const Home = () => {
  const {
    setKindOfServicesSelectedHome,
    setListServiceHome,
    setLoadingListServiceHome,
    setListComments,
    kindOfServices,
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
    <FramerMotionHomeDashboardMoreInfo>
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
    </FramerMotionHomeDashboardMoreInfo>
  );
};
