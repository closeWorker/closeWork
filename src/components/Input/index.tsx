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
  onChange,
  maxLength,
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
          onChange={onChange}
          maxLength={maxLength}
        />

        <Title type="Body-600" colorTitle="negative">
          {error}
        </Title>
      </Fieldset>
    </>
  );
};
