import React, { ReactNode } from "react";

export interface iUserContext {
  loadingButton: boolean;
  userProfile: iUserProfile;
  onSubmitLogin: (data: iLoginSubmit) => void;
  handleLogout: () => void;
  tokenIsValid: boolean;
  userValid: boolean;
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
  link_instagram: string;
  id: number;
}

export interface iServiceContext {
  listServiceHome: iListServiceHome[];
  filterServiceActived: string;
  setFilterServiceActived: React.Dispatch<React.SetStateAction<string>>;
  listServiceUserLogged: iListServiceUserLogged[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string;
  setTypeModal: React.Dispatch<React.SetStateAction<string>>;
  requestRegisteredUserServices: () => void;
  validatelistServiceUserLogged: boolean;
  loadingListServiceDashboard: boolean;
}

export interface iListServiceUserLogged {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  link_instagram: string;
  id: number;
}

export interface iLoginSubmit {
  email: string;
  password: string;
}

export interface iDefaultErrorResponse {
  message: string;
}
