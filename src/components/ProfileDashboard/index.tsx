import { MdEdit } from "react-icons/md";
import {
  StyledEdit,
  StyledName,
  StyledProfile,
  StyledProfileDescription,
} from "./style";
import icon from "../../assets/icon-profile.svg";
import { Button } from "../Button";
import { ContainerHome } from "../../styles/Container";
import { Title } from "../Title";

export const ProfileDashboard = () => {
  return (
    <StyledProfile>
      <ContainerHome>
        <StyledEdit>
          <div>
            <Button style="icon" type="button" children={<MdEdit size={5} />} />
          </div>
        </StyledEdit>
        <StyledProfileDescription>
          <img src={icon} alt="imagem de perfil do usuário" />
          <StyledName>
            <div>
              <Title children="João Pedro" colorTitle="white" type="Heading1" />
              <Title children="Marceneiro" colorTitle="white" type="Body" />
            </div>
            <Title
              children="joaopedro@mail.com"
              colorTitle="white"
              type="Body"
            />
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
