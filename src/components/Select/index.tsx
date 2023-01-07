import React, { forwardRef, SelectHTMLAttributes } from "react";
import { Fieldset } from "./style";

interface iSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = forwardRef<HTMLSelectElement, iSelectProps>(
  ({ ...rest }, ref) => {
    return (
      <Fieldset>
        <select ref={ref} {...rest}></select>
      </Fieldset>
    );
  }
);
