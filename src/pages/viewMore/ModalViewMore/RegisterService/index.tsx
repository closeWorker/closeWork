import { DivModal } from "../style";
import { DivRegister, FormRegister } from "./style";
import { HeaderModal } from "../HeaderModal";
import { ElementType, useContext, useEffect, useRef } from "react";
import { ServiceContext } from "../../../../context/ServiceContext";
import { Input } from "../../../../components/Input";
import { Textarea } from "../../../../components/Textarea";
import { Button } from "../../../../components/Button";
import { useOutClick } from "../../../../hooks/useOutClick";

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
          {/* <Input
            label="Nome do Serviço"
            placeholder="Digite o nome do serviço"
            type="text"
          />
          <Textarea
            label="Descrição do Serviço"
            placeholder="Faça aqui a escrição do serviço"
          /> */}
          <Button style="blueLight" type="submit">
            Cadastrar Serviço
          </Button>
        </FormRegister>
      </DivRegister>
    </DivModal>
  );
};
