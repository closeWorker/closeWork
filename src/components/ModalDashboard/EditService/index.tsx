import { Button } from "../../Button";
import { DivModal } from "../style";
import { DivEdit, FormEdit } from "./style";
import { Input } from "../../Input";
import { HeaderModal } from "../HeaderModal";
import { Textarea } from "../../Textarea";

export const EditService = () => {
  return (
    <DivModal>
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
