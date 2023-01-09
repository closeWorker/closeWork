import { useRef } from "react";
import { StyledContainerImgProfile, StyledContainerImgModal } from "./style";
import icon from "../../assets/icon-profile.svg";
import { iImgProfileProps } from "./type";

export const ImgProfile = ({ alt, srcLink, type }: iImgProfileProps) => {
  const imgProfileRef = useRef<HTMLImageElement>(null);
  const validateImgProfile = () => {
    if (imgProfileRef.current !== null) {
      imgProfileRef.current.src = icon;
    }
  };

  switch (type) {
    case "profile":
      return (
        <StyledContainerImgProfile>
          <img
            src={srcLink}
            alt={alt}
            ref={imgProfileRef}
            onError={validateImgProfile}
          />
        </StyledContainerImgProfile>
      );
      break;

    case "modal":
      return (
        <StyledContainerImgModal>
          <img
            src={srcLink}
            alt={alt}
            ref={imgProfileRef}
            onError={validateImgProfile}
          />
        </StyledContainerImgModal>
      );
      break;
  }
};
