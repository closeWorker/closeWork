import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { iDefaultErrorResponse, iListComments } from "../../context/type";
import { iServiceMoreInfo } from "../moreInfo";
import { DescriptionService } from "./DescriptionService";
import { HeaderViewMore } from "./HeaderViewMore";
import { ProfileViewMore } from "./ProfileViewMore";
import { ReviewViewMore } from "./ReviewsViewMore";
import { StyledService, StyledViewMore } from "./style";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { LoadingFullPage } from "../../components/LoadingFullPage";
import { Title } from "../../components/Title";
import { FramerMotionHomeDashboardMoreInfo } from "../../components/FramerMotion";

export const ViewMore = () => {
  const [serviceMoreInfo, setServiceMoreInfo] = useState(
    {} as iServiceMoreInfo
  );
  const [listComments, setListComments] = useState<iListComments[]>([]);
  const [loadingPage, setLoadingPage] = useState(true);

  const params = useParams();

  useEffect(() => {
    const requestServicesAndComments = async () => {
      try {
        const responseServices = await api.get(`services/${params.serviceId}`);
        const responseComments = await api.get(
          `comments?serviceId=${params.serviceId}`
        );
        setServiceMoreInfo(responseServices.data);
        setListComments(responseComments.data);

        const data = {
          email: "usercoments@gmail.com",
          password: "123456",
        };
        const responseLogin = await api.post("/login", data);
        localStorage.setItem(
          "@closework:commentToken",
          responseLogin.data.accessToken
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingPage(false);
      }
    };
    requestServicesAndComments();
  }, []);
  return (
    <>
      {loadingPage ? (
        <LoadingFullPage />
      ) : (
        <FramerMotionHomeDashboardMoreInfo>
          <StyledViewMore>
            <HeaderViewMore />
            <ProfileViewMore service={serviceMoreInfo} />
            <DescriptionService
              service={serviceMoreInfo}
              listComments={listComments}
            />
            <StyledService>
              <Title type="Heading2" colorTitle="blue-2">
                Comentários ({listComments.length})
              </Title>
            </StyledService>
            <ReviewViewMore listCommentsProp={listComments} />
            <Footer />
          </StyledViewMore>
        </FramerMotionHomeDashboardMoreInfo>
      )}
    </>
  );
};
