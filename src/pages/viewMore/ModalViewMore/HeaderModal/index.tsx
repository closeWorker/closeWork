import icon from "../../../../assets/icon-profile.svg";
import { Header, UserInfo } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { Title } from "../../../../components/Title";
import { Button } from "../../../../components/Button";

export const HeaderModal = () => {
  const { setOpenModal } = useContext(ServiceContext);
  return (
    <Header>
      <UserInfo>
        <img src={icon} alt="imagem de perfil do usuário" />
        <div>
          <Title children="João Pedro" type="Heading2" colorTitle="white" />
          <Title children="joaopedro@mail.com" type="Body" colorTitle="white" />
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
