import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { Delete } from "./Delete";
import { EditService } from "./EditService";
import { EditUser } from "./EditUser";
import { RegisterService } from "./RegisterService";
import { Modal } from "./style";

export const ModalDashboard = () => {
  const { typeModal } = useContext(ServiceContext);
  return (
    <Modal>
      {typeModal === "EditUser" ? <EditUser /> : ""}
      {typeModal === "RegisterService" ? <RegisterService /> : ""}
      {typeModal === "EditService" ? <EditService /> : ""}
      {typeModal === "DeleteService" ? <Delete /> : ""}
      {typeModal === "DeleteUser" ? <Delete /> : ""}
    </Modal>
  );
};
