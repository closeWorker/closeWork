import {
  StyledRegisterServices,
  StyledService,
  StyledServices,
  StyledServicesDashboard,
} from "./style";
import { Button } from "../../../components/Button";
import { ContainerHome } from "../style";
import { CardDashboard } from "../cardDashboard";
import { Title } from "../../../components/Title";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";

export const ServicesDashboard = () => {
  const {
    setOpenModal,
    setTypeModal,
    validatelistServiceUserLogged,
    listServiceUserLogged,
    loadingListServiceDashboard,
  } = useContext(ServiceContext);
  return (
    <StyledServicesDashboard>
      <StyledRegisterServices>
        <Title
          children="Para cadastrar um novo serviço pressione o botão abaixo"
          type="Body-600"
          colorTitle="blue-1"
        />
        <Button
          style="blueDark"
          type="button"
          name="Cadastar"
          action={() => {
            setOpenModal(true);
            setTypeModal("RegisterService");
          }}
        />
      </StyledRegisterServices>
      <StyledService>
        <Title children="Serviços" type="Heading2" colorTitle="blue-2" />
      </StyledService>
      <ContainerHome>
        {loadingListServiceDashboard ? (
          validatelistServiceUserLogged ? (
            <StyledServices>
              {listServiceUserLogged.map((item, index) => {
                return <CardDashboard key={index} item={item} />;
              })}
            </StyledServices>
          ) : (
            <h1>Não existe serviços cadastrados</h1>
          )
        ) : (
          <h1>Carregando ....</h1>
        )}
      </ContainerHome>
    </StyledServicesDashboard>
  );
};
