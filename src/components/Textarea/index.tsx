import { Title } from "../Title";
import { Fieldset } from "./style";
import { iTextareaProps } from "./type";

export const Textarea = ({
  id,
  labelName,
  placeholder,
  linkForm,
  error,
  disabled,
}: iTextareaProps) => {
  return (
    <Fieldset>
      <label htmlFor={id}>{labelName}</label>
      <textarea
        placeholder={placeholder}
        {...linkForm}
        disabled={disabled}
        id={id}
      />
      <Title type="Body-600" colorTitle="negative">
        {error}
      </Title>
    </Fieldset>
  );
};
