import { Button } from "../Button";
import { Buttons, StyledHeaderServices } from "../ServicesDashboard/style";
import { IoEyeSharp } from "react-icons/io5";

export const CardDashboard = () => {
  return (
    <li>
      <StyledHeaderServices>
        <div></div>
        <h2>Móvel planejado</h2>
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
        <Button style="blueDark" type="button">
          Editar
        </Button>
      </Buttons>
    </li>
  );
};
