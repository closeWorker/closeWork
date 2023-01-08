import { Button } from "../../../components/Button";
import { Buttons, StyledHeaderServices } from "../ServicesDashboard/style";
import { IoEyeSharp } from "react-icons/io5";
import { Title } from "../../../components/Title";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { iCardProps } from "./type";

export const CardDashboard = ({ item }: iCardProps) => {
  const { setOpenModal, setTypeModal, setInfosModalEditService } =
    useContext(ServiceContext);
  return (
    <li>
      <StyledHeaderServices>
        <div></div>
        <Title type="Heading1" colorTitle="blue-1">
          {item.kind_of_service}
        </Title>
        <Button
          style="icon"
          type="button"
          children={<IoEyeSharp size={30} />}
        />
      </StyledHeaderServices>
      <Buttons>
        <Button style="delete" type="button">
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
