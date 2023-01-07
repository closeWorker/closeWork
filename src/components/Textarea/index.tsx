import React, { forwardRef, TextareaHTMLAttributes } from "react";
import { Fieldset } from "./style";

interface iTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder: string;
  value?: string | number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, iTextareaProps>(
  ({ label, placeholder, value, ...rest }, ref) => {
    return (
      <Fieldset>
        <label>{label}</label>
        <textarea
          placeholder={placeholder}
          ref={ref}
          defaultValue={value}
          {...rest}
        />
      </Fieldset>
    );
  }
);
