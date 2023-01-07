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
import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { UserContext } from "../../context/UserContext";

export const ProfileDashboard = () => {
  const { setOpenModal, setTypeModal } = useContext(ServiceContext);
  const { userProfile } = useContext(UserContext);
  return (
    <StyledProfile>
      <ContainerHome>
        <StyledEdit>
          <div>
            <Button
              style="icon"
              type="button"
              children={<MdEdit size={5} />}
              action={() => {
                setOpenModal(true);
                setTypeModal("EditUser");
              }}
            />
          </div>
        </StyledEdit>
        <StyledProfileDescription>
          <img src={icon} alt="imagem de perfil do usuário" />
          <StyledName>
            <div>
              <Title colorTitle="white" type="Heading1">
                {userProfile.name}
              </Title>
              <Title colorTitle="white" type="Body">
                {userProfile.email}
              </Title>
              <Title colorTitle="white" type="Body">
                {userProfile.contact}
              </Title>
            </div>
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
