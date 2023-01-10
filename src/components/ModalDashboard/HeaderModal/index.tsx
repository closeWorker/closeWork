import icon from "../../../assets/icon-profile.svg";
import { Button } from "../../Button";
import { Title } from "../../Title";
import { Header, UserInfo } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ServiceContext } from "../../../context/ServiceContext";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { ImgProfile } from "../../ImgProfile";

export const HeaderModal = () => {
  const { setOpenModal } = useContext(ServiceContext);
  const { userProfile } = useContext(UserContext);
  return (
    <Header>
      <UserInfo>
        <ImgProfile
          alt="imagem de perfil do usuário"
          type="modal"
          srcLink={userProfile.avatar}
        />
        <div>
          {/* <Title type="Heading2" colorTitle="white">
            {userProfile.email}
          </Title>
          <Title type="Body" colorTitle="white">
            {userProfile.name}
          </Title> */}
        </div>
      </UserInfo>
      <Button
        style="transparent"
        type="button"
        children={<AiOutlineClose />}
        action={() => setOpenModal(false)}
      />
    </Header>
  );
};
