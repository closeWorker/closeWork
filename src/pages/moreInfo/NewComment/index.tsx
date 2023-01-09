import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { Textarea } from "../../../components/Textarea"
import { ContainerNewComment, Fieldset } from "./style"


export const NewComment = () => {
  return (
    <ContainerNewComment>
        <Input type="text" id="name" labelName="Nome:" placeholder="Digite seu nome aqui"/>
        <Textarea id="comment" labelName="Comentário:" placeholder="Digite seu comentário aqui"/>
        <Fieldset>
        <label>Avaliação:</label>
        <select >
            <option value="5">5,0</option>
            <option value="4">4,0</option>
            <option value="3">3,0</option>
            <option value="2">2,0</option>
            <option value="1">1,0</option>
        </select>
        </Fieldset>
        <Button style="blueDark" type="submit" name="Enviar Depoimento"/>
    </ContainerNewComment>
  )
}
