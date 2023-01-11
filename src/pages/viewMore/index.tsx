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

export const ViewMore = () => {
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
        console.log(response);
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
        <StyledViewMore>
          <HeaderViewMore />
          <ProfileViewMore service={serviceMoreInfo} />
          <DescriptionService
            service={serviceMoreInfo}
            listComments={listComments}
          />
          <StyledService>
            <Title type="Heading2" colorTitle="blue-2">
              Comentários
            </Title>
          </StyledService>
          <ReviewViewMore listCommentsProp={listComments} />
          <Footer />
        </StyledViewMore>
      ) : (
        <LoadingFullPage />
      )}
    </>
  );
};
