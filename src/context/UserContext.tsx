import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iUserContext,
  iPropsUserProvider,
  iUserProfile,
  iLoginSubmit,
  iDefaultErrorResponse,
} from "./type";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  const [userProfile, setUserProfile] = useState({} as iUserProfile);
  const [loadingButton, setLoadingButton] = useState(false);

  const navigate = useNavigate();

  const onSubmitLogin = async (data: iLoginSubmit) => {
    try {
      setLoadingButton(true);
      const response = await api.post("/login", data);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("@closework:token", response.data.accessToken);
      localStorage.setItem(
        "@closework:user",
        JSON.stringify(response.data.user)
      );
      setUserProfile(response.data.user);

      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
      toast.error("Ops! Algo deu errado, faça o login novamente");
    } finally {
      setLoadingButton(false);
    }
  };

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    localStorage.removeItem("@closework:token");
    localStorage.removeItem("@closework:user");
    navigate("/login");
  };

  useEffect(() => {}, []);
  return (
    <UserContext.Provider
      value={{ loadingButton, userProfile, onSubmitLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
