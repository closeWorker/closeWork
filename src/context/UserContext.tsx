import { createContext } from "react";
import { iUserContext, iPropsUserProvider } from "./type";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
