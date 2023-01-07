import { Button } from "../Button";
import { Buttons, StyledHeaderServices } from "../ServicesDashboard/style";
import { IoEyeSharp } from "react-icons/io5";
import { Title } from "../Title";
import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";

export const CardDashboard = () => {
  const { setOpenModal, setTypeModal } = useContext(ServiceContext);
  return (
    <li>
      <StyledHeaderServices>
        <div></div>
        <Title children="Móvel planejado" type="Heading1" colorTitle="blue-1" />
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
          }}
        >
          Editar
        </Button>
      </Buttons>
    </li>
  );
};
