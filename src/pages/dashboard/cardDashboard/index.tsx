import { Button } from "../../../components/Button";
import { Buttons, StyledHeaderServices } from "../ServicesDashboard/style";
import { IoEyeSharp } from "react-icons/io5";
import { Title } from "../../../components/Title";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { iCardProps } from "./type";
import { Link } from "react-router-dom";
import { LinkNavigation } from "../../../components/LinkNavigation";

export const CardDashboard = ({ item }: iCardProps) => {
  const { setOpenModal, setTypeModal, setInfosModalEditService, setIdService } =
    useContext(ServiceContext);
  return (
    <li>
      <StyledHeaderServices>
        <div></div>
        <Title type="Heading1" colorTitle="blue-1">
          {item.kind_of_service}
        </Title>
        <LinkNavigation name="" style="icon" linkTo={`/view_more/${item.id}`}>
          <IoEyeSharp size={30} />
        </LinkNavigation>
      </StyledHeaderServices>
      <Buttons>
        <Button
          style="delete"
          type="button"
          action={() => {
            setOpenModal(true);
            setTypeModal("DeleteService");
            setIdService(item.id);
          }}
        >
          Excluir
        </Button>
        <Button
          style="blueDark"
          type="button"
          action={() => {
            setOpenModal(true);
            setTypeModal("EditService");
            setInfosModalEditService(item);
          }}
        >
          Editar
        </Button>
      </Buttons>
    </li>
  );
};
