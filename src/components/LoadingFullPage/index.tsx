import { StyledContainerLoading } from "./style";
import { Oval } from "react-loader-spinner";
export const LoadingFullPage = () => {
  return (
    <StyledContainerLoading>
      <Oval
        height={80}
        width={80}
        color="#263F6D"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#6487C8"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyledContainerLoading>
  );
};
