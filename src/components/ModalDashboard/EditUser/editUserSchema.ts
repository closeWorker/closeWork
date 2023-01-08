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
    .matches(
      /([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})/,
      "Digite um número válido"
    )
    .min(12, "Precisa conter ao menos 12 caracteres")
    .max(13, "Permitido no máximo 13 caracteres"),
  avatar: yup.string().required("Imagem de perfil é obrigatório"),
});
