import { ReactNode } from "react";
import { StyledButton } from "./style";

interface iButtonProps {
  name?: string;
  type: "button" | "submit";
  action?: () => void;
  disabled?: boolean;
  arialLabel?: string;
  style: "blueDark" | "blueLight" | "delete" | "icon";
  children?: ReactNode;
}

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
