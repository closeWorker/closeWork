import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivRegister, FormRegister } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { Textarea } from "../../Textarea";
import { ElementType, useContext, useEffect, useRef } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { useOutClick } from "../../../hooks/useOutClick";

export const RegisterService = () => {
  const { setOpenModal } = useContext(ServiceContext);

  const modalRef = useOutClick(() => {
    setOpenModal(false);
  });

  return (
    <DivModal ref={modalRef}>
      <DivRegister>
        <HeaderModal />
        <FormRegister>
          <Input
            label="Nome do Serviço"
            placeholder="Digite o nome do serviço"
            type="text"
          />
          <Textarea
            label="Descrição do Serviço"
            placeholder="Faça aqui a escrição do serviço"
          />
          <Button style="blueLight" type="submit">
            Cadastrar Serviço
          </Button>
        </FormRegister>
      </DivRegister>
    </DivModal>
  );
};
