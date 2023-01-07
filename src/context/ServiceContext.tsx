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
  const [validatelistServiceUserLogged, setValidatelistServiceUserLogged] =
    useState(false);
  const [loadingListServiceDashboard, setLoadingListServiceDashboard] =
    useState(false);

  const requestRegisteredUserServices = async () => {
    const token = localStorage.getItem("@closework:token");
    const userId = localStorage.getItem("@closework:userId");
    if (token) {
      if (userId) {
        try {
          setLoadingListServiceDashboard(false);
          const response = await api.get(`/users/${userId}?_embed=services`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.data.services.length > 0) {
            console.log("existe serviços cadastrados");
            setServiceUserLogged(response.data.services);
            setValidatelistServiceUserLogged(true);
          } else {
            console.log("Não existe serviços cadastrados");
            setServiceUserLogged(response.data.services);
            setValidatelistServiceUserLogged(false);
          }
        } catch (error) {
          setLoadingListServiceDashboard(false);
          console.log(error);
        } finally {
          setLoadingListServiceDashboard(true);
        }
      }
    }
  };

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
        requestRegisteredUserServices,
        validatelistServiceUserLogged,
        loadingListServiceDashboard,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
