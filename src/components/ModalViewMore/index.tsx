import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { EditService } from "./EditService";
import { EditUser } from "./EditUser";
import { RegisterService } from "./RegisterService";
import { Modal } from "./style";

export const ModalViewMore = () => {
  const { typeModal } = useContext(ServiceContext);
  return (
    <Modal>
      {typeModal === "EditUser" ? <EditUser /> : ""}
      {typeModal === "RegisterService" ? <RegisterService /> : ""}
      {typeModal === "EditService" ? <EditService /> : ""}
    </Modal>
  );
};
