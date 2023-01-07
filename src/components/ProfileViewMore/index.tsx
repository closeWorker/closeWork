import { MdEdit } from "react-icons/md";
import {
  StyledCenter,
  StyledEdit,
  StyledName,
  StyledProfile,
  StyledProfileDescription,
  StyledStars,
} from "./style";
import icon from "../../assets/icon-profile.svg";
import { Button } from "../Button";
import { ContainerHome } from "../../styles/Container";
import { Title } from "../Title";
import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { RiStarFill } from "react-icons/ri";

export const ProfileViewMore = () => {
  const { setOpenModal, setTypeModal } = useContext(ServiceContext);
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
            <StyledCenter>
              <Title children="João Pedro" colorTitle="white" type="Heading1" />
              <Title children="Marceneiro" colorTitle="white" type="Body" />
            </StyledCenter>
            <Title
              children="joaopedro@mail.com"
              colorTitle="white"
              type="Body"
            />
            <StyledStars>
              <RiStarFill size={30} />
              <RiStarFill size={30} />
              <RiStarFill size={30} />
              <RiStarFill size={30} />
              <RiStarFill size={30} />
              <p>5,0</p>
            </StyledStars>
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
