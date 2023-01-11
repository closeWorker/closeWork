import { ReactNode } from "react";

export interface iLinkProps {
  name?: string;
  linkTo: string;
  style: "blueDark" | "blueLight" | "icon";
  children?: ReactNode;
}

export interface iPropsLink {
  variant: "blueDark" | "blueLight" | "icon";
}
