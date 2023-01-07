import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProfileDashboard } from "../../components/ProfileDashboard";
import { ServicesDashboard } from "../../components/ServicesDashboard";
import { Footer } from "../../components/Footer";
import { ModalDashboard } from "../../components/ModalDashboard";
import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";

export const Dashboard = () => {
  const { openModal } = useContext(ServiceContext);
  return (
    <>
      {openModal ? <ModalDashboard /> : ""}
      <HeaderDashboard />
      <ProfileDashboard />
      <ServicesDashboard />
      <Footer />
    </>
  );
};
