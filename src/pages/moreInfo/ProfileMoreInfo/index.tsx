import { MdEdit } from "react-icons/md";
import {
  StyledName,
  StyledProfile,
  StyledProfileDescription,
} from "./style";
import { ContainerHome } from "../style";
import { Title } from "../../../components/Title";
import { ImgProfile } from "../../../components/ImgProfile";

export const ProfileMoreInfo = () => {

  return (
    <StyledProfile>
      <ContainerHome>
        <StyledProfileDescription>
          <ImgProfile
            alt="imagem de perfil do usuário"
            type="profile"
            srcLink={"userProfile.avatar"}
          />
          <StyledName>
            <div>
              <Title colorTitle="white" type="Heading1">
                {"userProfile.name"}
              </Title>
              <Title colorTitle="white" type="Body">
                {"userProfile.email"}
              </Title>
              <Title colorTitle="white" type="Body">
                {"userProfile.contact"}
              </Title>
            </div>
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
