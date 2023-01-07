import { HeaderViewMore } from "../../components/HeaderViewMore";
import { ProfileViewMore } from "../../components/ProfileViewMore";
import { Footer } from "../../components/Footer";
import { DescriptionService } from "../../components/DescriptionService";
import { ReviewViewMore } from "../../components/ReviewsViewMore";
import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { ModalViewMore } from "../../components/ModalViewMore";

export const ViewMore = () => {
  const { openModal } = useContext(ServiceContext);
  return (
    <>
      {openModal ? <ModalViewMore /> : ""}
      <HeaderViewMore />
      <ProfileViewMore />
      <DescriptionService />
      <ReviewViewMore />
      <Footer />
    </>
  );
};
