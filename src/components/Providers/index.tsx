import { UserProvider } from "../../context/UserContext";
import { iProviders } from "./type";

export const Providers = ({ children }: iProviders) => {
  return <UserProvider>{children}</UserProvider>;
};
