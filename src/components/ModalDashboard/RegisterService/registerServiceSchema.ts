import * as yup from "yup";
export const registerServiceSchema = yup.object().shape({
  kind_of_service: yup.string().required("Serviço é obrigatório").trim("ddd"),
  description: yup.string().required("A descrição é obrigatória"),
});
