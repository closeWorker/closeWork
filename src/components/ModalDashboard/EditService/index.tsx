import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { HeaderModal } from "../HeaderModal";
import { Textarea } from "../../Textarea";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { UserContext } from "../../../context/UserContext";
import { SelectModal } from "../SelectModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editServiceSchema } from "./editServiceSchema";
import { iEditServiceSubmit } from "./type";
import { api } from "../../../services/api";
import { RotatingLines } from "react-loader-spinner";

export const EditService = () => {
  const {
    setOpenModal,
    loadingButtonModal,
    setLoadingButtonModal,
    infosModalEditService,
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
  } = useForm<iEditServiceSubmit>({
    mode: "onBlur",
    resolver: yupResolver(editServiceSchema),
    defaultValues: {
      kind_of_service: infosModalEditService.kind_of_service,
      description: infosModalEditService.description,
    },
  });

  const onSubmitEditService: SubmitHandler<iEditServiceSubmit> = async (
    data
  ) => {
    data = {
      ...data,
      userId: infosModalEditService.userId,
      service_provider: infosModalEditService.service_provider,
      service_provider_avatar: infosModalEditService.service_provider_avatar,
      phone_number: infosModalEditService.phone_number,
      id: infosModalEditService.id,
    };
    const token = localStorage.getItem("@closework:token");
    const serviceId = infosModalEditService.id;
    if (token) {
      try {
        setLoadingButtonModal(true);
        const response = await api.patch(`/services/${serviceId}`, data, {
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
      <DivEdit>
        <HeaderModal />
        <FormEdit onSubmit={handleSubmit(onSubmitEditService)}>
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
          <Button style="blueLight" type="submit">
            {loadingButtonModal ? (
              <RotatingLines
                strokeColor="black"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            ) : (
              "Atualizar Serviço"
            )}
          </Button>
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
