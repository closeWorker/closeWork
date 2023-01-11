import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { FramerMotionHomeDashboardMoreInfo } from "../../components/FramerMotion";
import { LoadingFullPage } from "../../components/LoadingFullPage";
import { Title } from "../../components/Title";
import { iDefaultErrorResponse, iListComments } from "../../context/type";
import { api } from "../../services/api";
import { DescriptionMoreInfo } from "./DescriptionMoreInfo";
import { HeaderMoreInfo } from "./HeaderMoreInfo";
import { ListComments } from "./ListComments";
import { NewComment } from "./NewComment";
import { ProfileMoreInfo } from "./ProfileMoreInfo";
import { StyledMoreInfo, StyledService } from "./style";

export interface iServiceMoreInfo {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  description: string;
  id: number;
}

export const MoreInfo = () => {
  const [serviceMoreInfo, setServiceMoreInfo] = useState(
    {} as iServiceMoreInfo
  );

  const [listComments, setListComments] = useState<iListComments[]>([]);
  const [loadingPage, setLoadingPage] = useState(false);

  const params = useParams();

  useEffect(() => {
    const requestServices = async () => {
      try {
        const response = await api.get(`services/${params.serviceId}`);
        const responseComments = await api.get(
          `comments?serviceId=${params.serviceId}`
        );
        setServiceMoreInfo(response.data);
        setListComments(responseComments.data);
        setTimeout(() => {
          setLoadingPage(true);
        }, 500);
      } catch (error) {
        setLoadingPage(false);
        console.error(error);
      } finally {
        setLoadingPage(false);
      }
    };

    const loginComments = async () => {
      const data = {
        email: "usercoments@gmail.com",
        password: "123456",
      };
      try {
        const response = await api.post("/login", data);
        localStorage.setItem(
          "@closework:commentToken",
          response.data.accessToken
        );
      } catch (error) {
        const currentError = error as AxiosError<iDefaultErrorResponse>;
        console.error(currentError.response?.data);
      } finally {
      }
    };

    requestServices();
    loginComments();
  }, []);

  return (
    <>
      {loadingPage ? (
        <FramerMotionHomeDashboardMoreInfo>
          <StyledMoreInfo>
            <HeaderMoreInfo />
            <ProfileMoreInfo service={serviceMoreInfo} />
            <DescriptionMoreInfo
              service={serviceMoreInfo}
              listComments={listComments}
            />
            <StyledService>
              <Title type="Heading2" colorTitle="blue-2">
                Criar comentário
              </Title>
            </StyledService>
            <NewComment setListComments={setListComments} />
            <StyledService>
              <Title type="Heading2" colorTitle="blue-2">
                Comentários
              </Title>
            </StyledService>
            <ListComments listCommentsProp={listComments} />
            <Footer />
          </StyledMoreInfo>
        </FramerMotionHomeDashboardMoreInfo>
      ) : (
        <LoadingFullPage />
      )}
    </>
  );
};
