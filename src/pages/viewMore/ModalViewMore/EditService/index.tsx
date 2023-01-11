import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { HeaderModal } from "../HeaderModal";
import { useContext, useEffect, useRef } from "react";
import { Input } from "../../../../components/Input";
import { ServiceContext } from "../../../../context/ServiceContext";
import { useOutClick } from "../../../../hooks/useOutClick";
import { Textarea } from "../../../../components/Textarea";
import { Button } from "../../../../components/Button";

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
          {/* <Input
            label="Nome do Serviço"
            placeholder="Digite o nome do serviço"
            type="text"
            value="Móvel planejado"
          />
          <Textarea
            label="Descrição do Serviço"
            placeholder="Faça aqui a escrição do serviço"
          /> */}
          <Button style="blueLight" type="submit">
            Atualizar Serviço
          </Button>
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
