import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { Title } from "../../Title";
import { Fieldset } from "./style";
import { iSelect } from "./type";

export const SelectModal = ({
  id,
  labelName,
  linkForm,
  error,
  disabled,
}: iSelect) => {
  const kindOfServices = [
    "Pedreiro",
    "Servente de Pedreiro",
    "Encanador",
    "Doceira",
    "Costureira",
    "Babá",
    "Cozinheira",
    "Manicure e Pedicure",
    "Barbeiro",
    "Cabelereira",
    "Diarista",
    "Outros",
  ];

  return (
    <>
      <Fieldset>
        <label htmlFor={id}>{labelName}</label>
        <select id={id} {...linkForm} disabled={disabled}>
          <option value="">Serviço</option>
          {kindOfServices.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>

        <Title type="Body-600" colorTitle="negative">
          {error}
        </Title>
      </Fieldset>
    </>
  );
};
