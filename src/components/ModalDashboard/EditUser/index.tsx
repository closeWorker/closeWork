import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { useContext, useEffect, useRef } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { UserContext } from "../../../context/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "./editUserSchema";
import { api } from "../../../services/api";

interface iEditProfileSubmit {
  name: string;
  contact: string;
  avatar: string;
}

export const EditUser = () => {
  const { setOpenModal, loadingButtonModal, setLoadingButtonModal } =
    useContext(ServiceContext);
  const { userProfile, setUserProfile } = useContext(UserContext);

  const modalRef = useOutClick(() => {
    setOpenModal(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditProfileSubmit>({
    mode: "onBlur",
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: userProfile.name,
      contact: userProfile.contact,
      avatar: userProfile.avatar,
    },
  });

  const onSubmitEditProfile: SubmitHandler<iEditProfileSubmit> = async (
    data
  ) => {
    const token = localStorage.getItem("@closework:token");
    const userId = localStorage.getItem("@closework:userId");
    if (token) {
      if (userId) {
        try {
          setLoadingButtonModal(true);
          const response = await api.patch(`/users/${userId}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const user = response.data;
          delete user.password;
          setUserProfile(user);
          setTimeout(() => {
            setOpenModal(false);
          }, 500);
        } catch (error) {
          setLoadingButtonModal(true);
          console.log(error);
        } finally {
          setLoadingButtonModal(false);
        }
      }
    }
  };

  return (
    <DivModal ref={modalRef}>
      <DivEdit>
        <HeaderModal />
        <FormEdit onSubmit={handleSubmit(onSubmitEditProfile)}>
          <Input
            id="name"
            labelName="Nome"
            placeholder="Digite seu nome"
            type="text"
            linkForm={register("name")}
            error={errors.name?.message}
          />
          <Input
            id="contact"
            labelName="Contato"
            placeholder="(xx)xxxxxxxxx"
            type="text"
            linkForm={register("contact")}
            error={errors.contact?.message}
          />
          <Input
            id="avatar"
            labelName="Imagem de Perfil"
            placeholder="Digite o link "
            type="text"
            linkForm={register("avatar")}
            error={errors.avatar?.message}
          />

          <Button
            name={loadingButtonModal ? "Carregando..." : "Atualizar Perfil"}
            style="blueLight"
            type="submit"
            disabled={loadingButtonModal}
          />

          <Button
            name="Excluir Perfil"
            style="grey1"
            type="button"
            disabled={loadingButtonModal}
          />
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
