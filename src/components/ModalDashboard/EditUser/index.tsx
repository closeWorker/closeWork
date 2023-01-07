import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";

export const EditUser = () => {
  return (
    <DivModal>
      <DivEdit>
        <HeaderModal />
        <FormEdit>
          <Input label="Nome" placeholder="Digite seu nome" type="text" />
          <Input label="Contato" placeholder="Digite seu Contato" type="text" />
          <Input
            label="Imagem de Perfil"
            placeholder="Adicione sua imagem aqui"
            type="text"
          />
          <Button style="blueLight" type="submit">
            Atualizar Perfil
          </Button>
          <Button style="grey1" type="submit">
            Excluir Perfil
          </Button>
        </FormEdit>
      </DivEdit>
    </DivModal>
  );
};
