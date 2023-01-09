/*
import { StyledLogin } from "./style";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../register/registerSchema";

import fullLogo from "../../assets/light-full-logo.svg";
import workersImg from "../../assets/workers-img.svg";
import { LinkNavigation } from "../../components/LinkNavigation";

interface ILoginFormData {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledLogin>
      <section>
        <h2>Login</h2>
        <form action="submit" onSubmit={handleSubmit((x) => console.log(x))}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="input-error">{errors.email.message}</p>
          )}
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="input-error">{errors.password.message}</p>
          )}
          <Button type="submit" style="blueDark">
            Entrar
          </Button>
        </form>
        <div>
          <p>Ainda não tem conta? Realize seu cadastro agora!</p>
          <LinkNavigation
            style="blueLight"
            name="Cadastar"
            linkTo="/register"
          ></LinkNavigation>
        </div>
      </section>
      <section className="img-section-login">
        <img src={fullLogo} className="logo-login" alt="Logo Close Worker" />
        <img
          src={workersImg}
          className="workers-img-login"
          alt="imagem de profissões"
        />
      </section>
    </StyledLogin>
   ); };
*/

import { useContext } from "react";
import { Button } from "../../components/Button";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const { loadingButton, onSubmitLogin } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <Button
        style="blueDark"
        disabled={loadingButton}
        name={loadingButton ? "Carregando..." : "Realizar Login"}
        type="button"
        action={() => {
          onSubmitLogin({
            email: "teste1@gmail.com",
            password: "123456ab",
          });
        }}
      />
    </>
  );
};

/* A senha do usercoments@gmail.com é 123456 */
