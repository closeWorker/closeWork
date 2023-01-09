import React, { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form/dist/types/form";

export interface iUserContext {
  loadingButton: boolean;
  userProfile: iUserProfile;
  onSubmitLogin: (data: iLoginSubmit) => void;
  handleLogout: () => void;
  tokenIsValid: boolean;
  userValid: boolean;
  setUserProfile: React.Dispatch<React.SetStateAction<iUserProfile>>;
  onSubmitRegister: SubmitHandler<IRegisterFormData>;
}

export interface iPropsUserProvider {
  children: ReactNode;
}

export interface iPropsServiceProvider {
  children: ReactNode;
}
export interface iUserProfile {
  email: string;
  name: string;
  contact: string;
  avatar: string;
  id: number;
}

export interface iListServiceHome {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  description: string;
  id: number;
}

export interface iListComments {
  userId: number;
  serviceId: number;
  name: string;
  comment: string;
  service_rating: number;
  id: number;
}

export interface iServiceContext {
  setListServiceHome: React.Dispatch<
    React.SetStateAction<[] | iListServiceHome[]>
  >;
  setLoadingListServiceHome: React.Dispatch<React.SetStateAction<boolean>>;
  filteredServicesHome: iListServiceHome[];
  setKindOfServicesSelectedHome: React.Dispatch<React.SetStateAction<string>>;
  loadingListServiceHome: boolean;
  listServiceUserLogged: iListServiceUserLogged[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string;
  setTypeModal: React.Dispatch<React.SetStateAction<string>>;
  requestRegisteredUserServices: () => void;
  validatelistServiceUserLogged: boolean;
  loadingListServiceDashboard: boolean;
  loadingButtonModal: boolean;
  setLoadingButtonModal: React.Dispatch<React.SetStateAction<boolean>>;
  infosModalEditService: iInfoModalEditService;
  setInfosModalEditService: React.Dispatch<
    React.SetStateAction<iInfoModalEditService>
  >;
  idUser: number;
  setIdUser: React.Dispatch<React.SetStateAction<number>>;
  idService: number;
  setIdService: React.Dispatch<React.SetStateAction<number>>;
  listComments: iListComments[];
  setListComments: React.Dispatch<React.SetStateAction<iListComments[]>>;
  listServiceHome: iListServiceHome[];
}

export interface iListServiceUserLogged {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  description: string;
  id: number;
}

export interface iLoginSubmit {
  email: string;
  password: string;
}

export interface iDefaultErrorResponse {
  message: string;
}

export interface iInfoModalEditService {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  description: string;
  id: number;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  contact: string;
  avatar?: string;
}
