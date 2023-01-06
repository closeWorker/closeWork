import { ReactNode } from "react";
import { boolean } from "yup";

export interface iUserContext {
  loadingButton: boolean;
  userProfile: iUserProfile;
}

export interface iPropsUserProvider {
  children: ReactNode;
}

export interface iUserProfile {
  email: string;
  name: string;
  contact: string;
  avatar: string;
  id: number;
}
