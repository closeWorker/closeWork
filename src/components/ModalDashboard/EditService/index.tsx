import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { Textarea } from "../../Textarea";
import { useContext, useEffect, useRef } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { UserContext } from "../../../context/UserContext";

export const EditService = () => {
  const { setOpenModal } = useContext(ServiceContext);

  const modalRef = useOutClick(() => {
    setOpenModal(false);
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
