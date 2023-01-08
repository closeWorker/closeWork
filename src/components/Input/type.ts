import { UseFormRegisterReturn } from "react-hook-form";

export interface iInput {
  labelName: string;
  id: string;
  type: "text" | "password";
  disabled?: boolean;
  placeholder?: string;
  linkForm?: UseFormRegisterReturn<string>;
  error?: string;
}
