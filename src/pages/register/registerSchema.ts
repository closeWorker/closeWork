import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string()
    .required("Nome obrigatório")
    .min(3, "O tamamano mínimo para o nome é de 3 caracteres")
    .max(128, "O nome excedeu o limite de 128 caracteres")
  ,

  email: yup.string()
    .required("Email obrigatório")
    .email("Email inválido")
  ,

  contact: yup.string()
    .required("Digite um número de telefone")
    .matches(/([0-9]{2,3})?(\([0-9]{2}\))([0-9]{4,5})([0-9]{4})/, "Digite um número válido")
  ,

  password: yup
    .string()
    .required("A senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .min(8, "É necessário pelomenos 8 caracteres")
    .max(16, "16 caracteres máximo para senha")
  ,

  confirmPassword: yup
    .string()
    .required("Confirme a sua senha")
    .oneOf([yup.ref("password"), null], "Não está idêntico á senha")
  ,

});
