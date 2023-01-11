import { useContext } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { api } from "../../../../services/api";
import { Button } from "../../../Button";
import { Title } from "../../../Title";
import { RotatingLines } from "react-loader-spinner";

export const DeleteService = () => {
  const {
    closeModal,
    idService,
    setLoadingButtonModal,
    requestRegisteredUserServices,
    loadingButtonModal,
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
        closeModal();
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
          action={() => onSubmitDeleteService()}
          disabled={loadingButtonModal}
        >
          {loadingButtonModal ? (
            <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          ) : (
            "Excluir"
          )}
        </Button>
        <Button
          style="blueLight"
          type="button"
          name="Manter"
          action={() => closeModal()}
        />
      </div>
    </>
  );
};
