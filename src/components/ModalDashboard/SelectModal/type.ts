import { UseFormRegisterReturn } from "react-hook-form";

export interface iSelect {
  labelName: string;
  id: string;
  disabled?: boolean;
  linkForm?: UseFormRegisterReturn<string>;
  error?: string;
}
