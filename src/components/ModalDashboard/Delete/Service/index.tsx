import { useContext } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { api } from "../../../../services/api";
import { Button } from "../../../Button";
import { Title } from "../../../Title";

export const DeleteService = () => {
  const {
    setOpenModal,
    idService,
    setLoadingButtonModal,
    requestRegisteredUserServices,
  } = useContext(ServiceContext);
  const onSubmitDeleteService = async () => {
    const token = localStorage.getItem("@closework:token");
    if (token) {
      try {
        setLoadingButtonModal(true);
        await api.delete(`/services/${idService}`, {
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
    <>
      <Title
        children="Deseja realmente excluir este serviço?"
        colorTitle="white"
        type="Heading1"
      />
      <div>
        <Button
          style="delete"
          type="button"
          children="Excluir"
          action={() => onSubmitDeleteService()}
        />
        <Button
          style="blueLight"
          type="button"
          children="Manter"
          action={() => setOpenModal(false)}
        />
      </div>
    </>
  );
};
