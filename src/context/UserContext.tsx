import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iUserContext,
  iPropsUserProvider,
  iUserProfile,
  iLoginSubmit,
  iDefaultErrorResponse,
  IRegisterFormData,
} from "./type";
import { AxiosError } from "axios";
import { ServiceContext } from "./ServiceContext";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { ILoginFormData } from "../pages/login/types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  const [userProfile, setUserProfile] = useState({} as iUserProfile);
  const [loadingButton, setLoadingButton] = useState(false);
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const [userValid, setUserValid] = useState(false);

  const { requestRegisteredUserServices } = useContext(ServiceContext);

  const navigate = useNavigate();

  const onSubmitLogin: SubmitHandler<ILoginFormData> = async (data) => {
    try {
      setLoadingButton(true);
      const response = await api.post("/login", data);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("@closework:token", response.data.accessToken);
      localStorage.setItem(
        "@closework:userId",
        JSON.stringify(response.data.user.id)
      );
      setUserProfile(response.data.user);
      requestRegisteredUserServices();
      setTokenIsValid(true);
      setUserValid(true);

      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
      toast.error("Ops! Algo deu errado, faça o login novamente");
    } finally {
      setLoadingButton(false);
    }
  };

  const onSubmitRegister: SubmitHandler<IRegisterFormData> = async (data) => {
    delete data.confirmPassword;
    data.avatar = "";
    try {
      setLoadingButton(true);
      const response = await api.post("/register", data);
      toast.success("Registro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
      toast.error("Ops! Algo deu errado, faça o registro novamente");
    } finally {
      setLoadingButton(false);
    }
  };

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    localStorage.removeItem("@closework:token");
    localStorage.removeItem("@closework:userId");
    setTokenIsValid(false);
    setUserValid(false);
    navigate("/home");
  };

  const validationToken = async () => {
    const token = localStorage.getItem("@closework:token");
    if (token) {
      try {
        const response = await api.get("/tokenAuth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return true;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  };

  const requestUserProfile = async () => {
    const token = localStorage.getItem("@closework:token");
    const userId = localStorage.getItem("@closework:userId");
    if (token) {
      if (userId) {
        try {
          const response = await api.get(`users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserProfile(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const validationAutomaticLogin = async () => {
    const test = await validationToken();
    if (test) {
      requestUserProfile();
      requestRegisteredUserServices();
      setTokenIsValid(true);
      setUserValid(true);
      navigate("/dashboard");
    } else {
      setTokenIsValid(true);
    }
  };

  const handlePhone = (event: any) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };
  const phoneMask = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  useEffect(() => {
    validationAutomaticLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loadingButton,
        userProfile,
        onSubmitLogin,
        handleLogout,
        tokenIsValid,
        userValid,
        setUserProfile,
        onSubmitRegister,
        handlePhone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
