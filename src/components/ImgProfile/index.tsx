import { useRef } from "react";
import { StyledImgProfile, StyledImgProfileModal } from "./style";
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
        <StyledImgProfile
          src={srcLink}
          alt={alt}
          ref={imgProfileRef}
          onError={validateImgProfile}
        />
      );
      break;

    case "modal":
      return (
        <StyledImgProfileModal
          src={srcLink}
          alt={alt}
          ref={imgProfileRef}
          onError={validateImgProfile}
        />
      );
      break;
  }
};
