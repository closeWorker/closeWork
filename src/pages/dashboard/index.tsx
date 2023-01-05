import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProfileDashboard } from "../../components/ProfileDashboard";
import { ServicesDashboard } from "../../components/ServicesDashboard";
import { Footer } from "../../components/Footer";
import { StyledDashboard } from "./style";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <HeaderDashboard />
      <ProfileDashboard />
      <ServicesDashboard />
      <Footer />
    </StyledDashboard>
  );
};
