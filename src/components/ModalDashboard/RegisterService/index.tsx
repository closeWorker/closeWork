import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivRegister, FormRegister } from "./style";
import { HeaderModal } from "../HeaderModal";
import { Textarea } from "../../Textarea";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { SelectModal } from "../SelectModal";
import { UserContext } from "../../../context/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { iRegisterServiceSubmit } from "./type";
import { registerServiceSchema } from "./registerServiceSchema";

export const RegisterService = () => {
  const {
    setOpenModal,
    loadingButtonModal,
    setLoadingButtonModal,
    requestRegisteredUserServices,
  } = useContext(ServiceContext);
  const { userProfile } = useContext(UserContext);

  const modalRef = useOutClick(() => {
    setOpenModal(false);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterServiceSubmit>({
    mode: "onBlur",
    resolver: yupResolver(registerServiceSchema),
  });

  const onSubmitRegisterService: SubmitHandler<iRegisterServiceSubmit> = async (
    data
  ) => {
    data = {
      ...data,
      userId: userProfile.id,
      service_provider: userProfile.name,
      service_provider_avatar: userProfile.avatar,
      phone_number: userProfile.contact,
    };
    const token = localStorage.getItem("@closework:token");
    if (token) {
      try {
        setLoadingButtonModal(true);
        const response = await api.post(`/services`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        requestRegisteredUserServices();
        setOpenModal(false);
      } catch (error) {
        setLoadingButtonModal(true);
        console.log(error);
      } finally {
        setLoadingButtonModal(false);
      }
    }
  };

  return (
    <DivModal ref={modalRef}>
      <DivRegister>
        <HeaderModal />
        <FormRegister onSubmit={handleSubmit(onSubmitRegisterService)}>
          <SelectModal
            id="kind_of_service"
            labelName="Tipo do serviço"
            linkForm={register("kind_of_service")}
            error={errors.kind_of_service?.message}
          />
          <Textarea
            labelName="Descrição do Serviço"
            placeholder="Faça aqui a escrição do serviço"
            id="description"
            linkForm={register("description")}
            error={errors.description?.message}
          />
          <Button
            style="blueLight"
            type="submit"
            name={loadingButtonModal ? "Carregando..." : "Cadastrar Serviço"}
          />
        </FormRegister>
      </DivRegister>
    </DivModal>
  );
};
