import { StyledLogin } from "./style";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import fullLogo from "../../assets/light-full-logo.svg";
import workersImg from "../../assets/workers-img.svg";
import { LinkNavigation } from "../../components/LinkNavigation";
import { ILoginFormData } from "./types";
import { loginSchema } from "./loginSchema";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const { loadingButton, onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <StyledLogin>
      <section>
        <h2>Login</h2>
        <form action="submit" onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <Input
            id="input-email"
            labelName="Email"
            type="text"
            linkForm={register("email")}
            placeholder="Digite seu email"
            error={errors.email?.message}
          />
          <Input
            id="input-password"
            labelName="Senha"
            type="password"
            linkForm={register("password")}
            placeholder="Digite sua senha"
            error={errors.password?.message}
          />
          <Button
            type="submit"
            style="blueDark"
            disabled={loadingButton}
            name={loadingButton ? "Carregando..." : "Realizar Login"}
          />
        </form>
        <div>
          <p>Ainda não tem conta? Realize seu cadastro agora!</p>
          <LinkNavigation
            style="blueLight"
            name="Cadastrar"
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
  );
};

/* A senha do usercoments@gmail.com é 123456 */
