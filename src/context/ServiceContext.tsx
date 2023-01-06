import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  iPropsServiceProvider,
  iListServiceHome,
  iServiceContext,
  iListServiceUserLogged,
} from "./type";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iPropsServiceProvider) => {
  const [listServiceHome, setListServiceHome] = useState<iListServiceHome[]>(
    []
  );
  const [filterServiceActived, setFilterServiceActived] = useState("Todos");
  const [listServiceUserLogged, setServiceUserLogged] = useState<
    iListServiceUserLogged[]
  >([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  useEffect(() => {}, []);
  return (
    <ServiceContext.Provider
      value={{
        listServiceHome,
        filterServiceActived,
        setFilterServiceActived,
        listServiceUserLogged,
        openModal,
        setOpenModal,
        typeModal,
        setTypeModal,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
