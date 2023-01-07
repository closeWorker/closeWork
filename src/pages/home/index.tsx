import React, { useEffect, useState } from "react";
import { HeaderHome } from "./HeaderHome";
import { ContainerHome, PageContainer, StyledHome } from "./style";
import worker1 from "../../assets/worker-1.svg";
import worker2 from "../../assets/worker-2.svg";
import worker3 from "../../assets/worker-3.svg";
import worker4 from "../../assets/worker-4.svg";
import worker5 from "../../assets/worker-5.svg";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { iService } from "./type";
import { CardsServicesHome } from "./CardsServicesHome";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<iService[] | []>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const requestServices = async () => {
      try {
        const response = await api.get("services");
        setServices(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    requestServices();
  }, []);

  const filteredList = services.filter((service) => {
    if (!filter) {
      return true;
    } else if (filter !== "Outros") {
      return service.kind_of_service === filter;
    } else {
      return (
        service.kind_of_service !== "Pedreiro" &&
        service.kind_of_service !== "Servente de Pedreiro" &&
        service.kind_of_service !== "Encanador" &&
        service.kind_of_service !== "Doceira" &&
        service.kind_of_service !== "Diarista" &&
        service.kind_of_service !== "Costureira" &&
        service.kind_of_service !== "Eletricista" &&
        service.kind_of_service !== "Babá" &&
        service.kind_of_service !== "Cozinheira" &&
        service.kind_of_service !== "Manicure e Pedicure" &&
        service.kind_of_service !== "Barbeiro" &&
        service.kind_of_service !== "Cabelereira"
      );
    }
  });

  const options = (
    <>
      <option value="">Todos</option>
      <option value="Pedreiro">Pedreiro</option>
      <option value="Servente de Pedreiro">Servente de Pedreiro</option>
      <option value="Encanador">Encanador</option>
      <option value="Doceira">Doceira</option>
      <option value="Diarista">Diarista</option>
      <option value="Costureira">Costureira</option>
      <option value="Eletricista">Eletricista</option>
      <option value="Babá">Babá</option>
      <option value="Cozinheira">Cozinheira</option>
      <option value="Manicure e Pedicure">Manicure e Pedicure</option>
      <option value="Barbeiro">Barbeiro</option>
      <option value="Cabelereira">Cabelereira</option>
      <option value="Outros">Outros</option>
    </>
  );
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
            <select onChange={(event) => setFilter(event.target.value)}>
              {options}
            </select>
          </div>
        </div>
        <ContainerHome>
          <CardsServicesHome services={filteredList} loading={loading} />
        </ContainerHome>
      </StyledHome>
      <Footer />
    </PageContainer>
  );
};
