import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  iPropsServiceProvider,
  iListServiceHome,
  iServiceContext,
  iListServiceUserLogged,
  iInfoModalEditService,
  iListComments,
} from "./type";

export const ServiceContext = createContext({} as iServiceContext);

export const ServiceProvider = ({ children }: iPropsServiceProvider) => {
  const [listServiceHome, setListServiceHome] = useState<iListServiceHome[]>(
    []
  );
  const [loadingListServiceHome, setLoadingListServiceHome] = useState(true);
  const [kindOfServiceSelectedHome, setKindOfServicesSelectedHome] =
    useState("Todos");

  const [listServiceUserLogged, setServiceUserLogged] = useState<
    iListServiceUserLogged[]
  >([]);
  const [openModal, setOpenModal] = useState(false);
  const [isClosing, setClosing] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [idUser, setIdUser] = useState(0);
  const [idService, setIdService] = useState(0);
  const [validatelistServiceUserLogged, setValidatelistServiceUserLogged] =
    useState(false);
  const [loadingListServiceDashboard, setLoadingListServiceDashboard] =
    useState(false);
  const [loadingButtonModal, setLoadingButtonModal] = useState(false);
  const [infosModalEditService, setInfosModalEditService] = useState(
    {} as iInfoModalEditService
  );
  const [listComments, setListComments] = useState<iListComments[]>([]);

  const navigate = useNavigate();

  const kindOfServices = [
    "Todos",
    "Pedreiro",
    "Servente de Pedreiro",
    "Encanador",
    "Doceira",
    "Costureira",
    "Babá",
    "Cozinheira",
    "Manicure e Pedicure",
    "Barbeiro",
    "Cabeleireira",
    "Outros",
  ];

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setOpenModal(false);
    }, 200);
  };

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
            setServiceUserLogged(response.data.services);
            setValidatelistServiceUserLogged(true);
          } else {
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

  const filteredServicesHome = listServiceHome.filter((service) =>
    kindOfServiceSelectedHome === "Todos"
      ? true
      : kindOfServiceSelectedHome === service.kind_of_service
  );

  const whatsNumber = (phoneNumber: string) =>
    `55${phoneNumber?.replace(/[()\ \s-]+/g, "")}`;

  return (
    <ServiceContext.Provider
      value={{
        kindOfServices,
        setListServiceHome,
        setKindOfServicesSelectedHome,
        filteredServicesHome,
        loadingListServiceHome,
        setLoadingListServiceHome,
        listServiceUserLogged,
        openModal,
        setOpenModal,
        closeModal,
        isClosing,
        typeModal,
        setTypeModal,
        requestRegisteredUserServices,
        validatelistServiceUserLogged,
        loadingListServiceDashboard,
        loadingButtonModal,
        setLoadingButtonModal,
        infosModalEditService,
        setInfosModalEditService,
        idUser,
        setIdUser,
        idService,
        setIdService,
        listComments,
        setListComments,
        listServiceHome,
        whatsNumber,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
