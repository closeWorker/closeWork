import { StyledButton } from "./style";
import { iButtonProps } from "./type";

export const Button = ({
  name,
  type,
  action,
  disabled,
  arialLabel,
  style,
  children,
}: iButtonProps) => {
  return (
    <StyledButton
      onClick={action}
      type={type}
      disabled={disabled}
      aria-label={arialLabel}
      variant={style}
    >
      {name}
      {children}
    </StyledButton>
  );
};
