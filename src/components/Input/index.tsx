import React, { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Title } from "../Title";
import { Fieldset } from "./style";
import { iInput } from "./type";

export const Input = ({
  type,
  id,
  labelName,
  placeholder,
  linkForm,
  error,
  disabled,
}: iInput) => {
  return (
    <>
      <Fieldset>
        <label htmlFor={id}>{labelName}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...linkForm}
          disabled={disabled}
        />

        <Title type="Body-600" colorTitle="negative">
          {error}
        </Title>
      </Fieldset>
    </>
  );
};
