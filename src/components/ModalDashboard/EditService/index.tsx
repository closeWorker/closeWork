import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { Textarea } from "../../Textarea";
import { useContext, useEffect, useRef } from "react";
import { ServiceContext } from "../../../context/ServiceContext";

export const EditService = () => {
  const { setOpenModal } = useContext(ServiceContext);

  const modalRef = useRef(null);

  useEffect(() => {
    const modalOutClick = (elem: MouseEvent) => {
      const target = elem.target;
      const element = modalRef.current;
      if (element) {
        element.contains(target);
        setOpenModal(false);
      }
    };
    window.addEventListener("mousedown", modalOutClick);
    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  });
  return (
    <DivModal ref={modalRef}>
      <DivEdit>
        <HeaderModal />
        <FormEdit>
          <Input
            label="Nome do Serviço"
            placeholder="Digite o nome do serviço"
            type="text"
            value="Móvel planejado"
          />
          <Textarea
            label="Descrição do Serviço"
            placeholder="Faça aqui a escrição do serviço"
          />
          <Button style="blueLight" type="submit">
            Atualizar Serviço
          </Button>
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
