import { ReactNode } from "react";
export interface iTitle {
  children: ReactNode;
  type:
    | "Heading1"
    | "Heading2"
    | "Heading3"
    | "Headline"
    | "Body"
    | "Body-600"
    | "Caption";
  colorTitle: "blue-1" | "blue-2" | "white" | "negative" | "sucess";
}

export interface iPropsTitle {
  colorTitle: "blue-1" | "blue-2" | "white" | "negative" | "sucess";
}
