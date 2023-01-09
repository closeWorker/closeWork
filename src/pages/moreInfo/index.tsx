import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import { DescriptionMoreInfo } from "./DescriptionMoreInfo";
import { HeaderMoreInfo } from "./HeaderMoreInfo";
import { ListComments } from "./ListComments";
import { NewComment } from "./NewComment";
import { ProfileMoreInfo } from "./ProfileMoreInfo";
import { StyledMoreInfo, StyledService } from "./style";

export const MoreInfo = () => {
  return (
    <>
      <StyledMoreInfo>
        <HeaderMoreInfo />
        <ProfileMoreInfo />
        <DescriptionMoreInfo />
        <StyledService>
          <Title type="Heading2" colorTitle="blue-2">
            Criar comentário
          </Title>
        </StyledService>
        <NewComment />
        <StyledService>
          <Title type="Heading2" colorTitle="blue-2">
            Comentários
          </Title>
        </StyledService>
        <ListComments/>
        <Footer/>
      </StyledMoreInfo>
    </>
  );
};
