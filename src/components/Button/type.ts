import { ReactNode } from "react";

export interface iButtonProps {
  name?: string;
  type: "button" | "submit";
  action?: () => void;
  disabled?: boolean;
  arialLabel?: string;
  style: "blueDark" | "blueLight" | "delete" | "icon" | "transparent" | "grey1";
  children?: ReactNode;
}

export interface iPropsButton {
  variant:
    | "blueDark"
    | "blueLight"
    | "delete"
    | "icon"
    | "transparent"
    | "grey1";
}
