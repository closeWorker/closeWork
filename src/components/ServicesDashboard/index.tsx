import {
  Buttons,
  StyledHeaderServices,
  StyledService,
  StyledServices,
  StyledServicesDashboard,
} from "./style";
import { IoEyeSharp } from "react-icons/io5";
import { Button } from "../Button";

export const ServicesDashboard = () => {
  return (
    <StyledServicesDashboard>
      <StyledService>
        <h2>Serviços</h2>
      </StyledService>
      <StyledServices>
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
        <li>
          <StyledHeaderServices>
            <div></div>
            <h2>Montagem de móvel</h2>
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
      </StyledServices>
    </StyledServicesDashboard>
  );
};
