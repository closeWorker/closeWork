import * as yup from "yup";
export const editProfileSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "O tamamano mínimo para o nome é de 3 caracteres")
    .max(128, "O nome excedeu o limite de 128 caracteres"),
  contact: yup
    .string()
    .required("Digite um número de telefone")
    .min(14, "Número inválido"),
  avatar: yup.string().required("Imagem de perfil é obrigatório"),
});
