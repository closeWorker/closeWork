import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUserContext, iPropsUserProvider, iUserProfile } from "./type";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  const [userProfile, setUserProfile] = useState({} as iUserProfile);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {}, []);
  return (
    <UserContext.Provider value={{ loadingButton, userProfile }}>
      {children}
    </UserContext.Provider>
  );
};
