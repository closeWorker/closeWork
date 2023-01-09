import { UseFormRegisterReturn } from "react-hook-form";

export interface iTextareaProps {
  labelName: string;
  id: string;
  disabled?: boolean;
  placeholder?: string;
  linkForm?: UseFormRegisterReturn<string>;
  error?: string;
}
