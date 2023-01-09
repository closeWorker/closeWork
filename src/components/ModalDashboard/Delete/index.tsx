import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { HeaderModal } from "../HeaderModal";
import { DivModal } from "../style";
import { DeleteService } from "./Service";
import { DivDelete } from "./style";
import { DeleteUser } from "./User";

export const Delete = () => {
  const { setOpenModal, typeModal } = useContext(ServiceContext);
  const modalRef = useOutClick(() => {
    setOpenModal(false);
  });
  return (
    <DivModal ref={modalRef}>
      <HeaderModal />
      <DivDelete>
        {typeModal === "DeleteService" ? <DeleteService /> : ""}
        {typeModal === "DeleteUser" ? <DeleteUser /> : ""}
      </DivDelete>
    </DivModal>
  );
};
