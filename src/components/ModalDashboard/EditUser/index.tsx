import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { useContext, useEffect, useRef } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { UserContext } from "../../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface iEditProfileSubmit {
  name: string;
  contact: string;
  avatar: string;
}

export const EditUser = () => {
  const { setOpenModal } = useContext(ServiceContext);
  const { userProfile } = useContext(UserContext);

  const modalRef = useOutClick(() => {
    setOpenModal(false);
  });

  const editProfileSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "O tamamano mínimo para o nome é de 3 caracteres")
      .max(128, "O nome excedeu o limite de 128 caracteres"),
    contact: yup
      .string()
      .required("Digite um número de telefone")
      .matches(
        /([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})/,
        "Digite um número válido"
      ),
    avatar: yup.string().required("Senha  é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditProfileSubmit>({
    mode: "onBlur",
    resolver: yupResolver(editProfileSchema),
  });

  return (
    <DivModal ref={modalRef}>
      <DivEdit>
        <HeaderModal />
        <FormEdit>
          <Input label="Nome" placeholder="Digite seu nome" type="text" />
          <Input label="Contato" placeholder="Digite seu Contato" type="text" />
          <Input
            label="Imagem de Perfil"
            placeholder="Adicione sua imagem aqui"
            type="text"
          />
          <Button style="blueLight" type="submit">
            Atualizar Perfil
          </Button>
          <Button style="grey1" type="button">
            Excluir Perfil
          </Button>
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
