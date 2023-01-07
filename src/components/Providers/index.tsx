import { ServiceProvider } from "../../context/ServiceContext";
import { UserProvider } from "../../context/UserContext";
import { iProviders } from "./type";

export const Providers = ({ children }: iProviders) => {
  return (
    <ServiceProvider>
      <UserProvider>{children}</UserProvider>
    </ServiceProvider>
  );
};
