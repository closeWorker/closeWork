import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido")
    .trim(),
  password: yup.string().required("A senha obrigatória"),
});
