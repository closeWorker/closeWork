import { useContext } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { UserContext } from "../../../../context/UserContext";
import { api } from "../../../../services/api";
import { Button } from "../../../Button";
import { Title } from "../../../Title";

export const DeleteUser = () => {
  const {
    setOpenModal,
    idUser,
    setLoadingButtonModal,
    requestRegisteredUserServices,
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
        children="Deseja realmente excluir seu usuário?"
        colorTitle="white"
        type="Heading1"
      />
      <div>
        <Button
          style="delete"
          type="button"
          children="Excluir"
          action={() => {
            onSubmitDeleteUser();
            handleLogout();
          }}
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
