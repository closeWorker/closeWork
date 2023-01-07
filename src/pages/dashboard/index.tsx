import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProfileDashboard } from "../../components/ProfileDashboard";
import { ServicesDashboard } from "../../components/ServicesDashboard";
import { Footer } from "../../components/Footer";
import { StyledDashboard } from "./style";
import { ModalDashboard } from "../../components/ModalDashboard";
import { useContext, useEffect } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  const { openModal } = useContext(ServiceContext);
  const { userProfile } = useContext(UserContext);

  return (
    <>
      {Object.keys(userProfile).length > 0 ? (
        <StyledDashboard>
          {openModal ? <ModalDashboard /> : ""}
          <HeaderDashboard />
          <ProfileDashboard />
          <ServicesDashboard />
          <Footer />
        </StyledDashboard>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
};
