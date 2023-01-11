import { useContext } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { UserContext } from "../../../../context/UserContext";
import { api } from "../../../../services/api";
import { Button } from "../../../Button";
import { Title } from "../../../Title";
import { RotatingLines } from "react-loader-spinner";

export const DeleteUser = () => {
  const {
    closeModal,
    idUser,
    setLoadingButtonModal,
    requestRegisteredUserServices,
    loadingButtonModal,
  } = useContext(ServiceContext);
  const { handleLogout } = useContext(UserContext);
  const onSubmitDeleteUser = async () => {
    const token = localStorage.getItem("@closework:token");
    if (token) {
      try {
        setLoadingButtonModal(true);
        await api.delete(`/users/${idUser}`, {
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
        children="Deseja realmente excluir seu usuário?"
        colorTitle="white"
        type="Heading1"
      />
      <div>
        <Button
          style="delete"
          type="button"
          action={() => {
            onSubmitDeleteUser();
            handleLogout();
          }}
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
