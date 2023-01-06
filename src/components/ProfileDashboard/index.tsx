import { MdEdit } from "react-icons/md";
import { StyledEdit, StyledProfile, StyledProfileDescription } from "./style";
import icon from "../../assets/icon-profile.svg";
import { Button } from "../Button";

export const ProfileDashboard = () => {
  return (
    <StyledProfile>
      <StyledEdit>
        <div>
          <Button style="icon" type="button" children={<MdEdit size={5} />} />
        </div>
      </StyledEdit>
      <StyledProfileDescription>
        <img src={icon} alt="imagem de perfil do usuário" />
        <div>
          <h2>João Pedro</h2>
          <p>Marceneiro</p>
        </div>
        <p>joaopedro@mail.com</p>
      </StyledProfileDescription>
    </StyledProfile>
  );
};
