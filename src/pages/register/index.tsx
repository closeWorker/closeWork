import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Button } from "../../components/Button";

import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";

import { LinkNavigation } from "../../components/LinkNavigation";
import { StyledRegister } from "./style";

import fullLogo from "../../assets/light-full-logo.svg";
import workersImg from "../../assets/workers-img.svg";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Link } from "react-router-dom";

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  contact: string;
}

export const Register = () => {
  const { loadingButton, onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledRegister>
      <section className="img-section">
        <img src={fullLogo} className="logo" alt="Logo Close Worker" />
        <img
          src={workersImg}
          className="workers-img"
          alt="imagem de profissões"
        />
      </section>
      <section className="form-section">
        <Title colorTitle="blue-2" type="Heading1">
          Cadastro
        </Title>
        <div>
          <Link to="/home">Retornar para Home</Link>
        </div>
        <form
          action="submit"
          onSubmit={handleSubmit(onSubmitRegister)}
          noValidate
        >
          <Input
            id="input-email"
            labelName="Email"
            type="text"
            linkForm={register("email")}
            placeholder="Digite seu email"
            error={errors.email?.message}
          />

          <Input
            id="input-name"
            labelName="Nome"
            type="text"
            linkForm={register("name")}
            placeholder="Digite seu nome"
            error={errors.name?.message}
          />

          <Input
            id="input-password"
            labelName="Senha"
            type="password"
            linkForm={register("password")}
            placeholder="Digite sua senha"
            error={errors.password?.message}
          />

          <Input
            id="input-confirm-password"
            labelName="Confirmar senha"
            type="password"
            linkForm={register("confirmPassword")}
            placeholder="Digite sua senha novamente"
            error={errors.confirmPassword?.message}
          />

          <Input
            id="input-contact"
            labelName="Contato"
            type="text"
            linkForm={register("contact")}
            placeholder="(11)922223333"
            error={errors.contact?.message}
          />

          <Button
            type="submit"
            style="blueDark"
            name={loadingButton ? "Carregando..." : "Cadastrar"}
            disabled={loadingButton}
          />
        </form>
        <div>
          <p>Já possui conta? Realize seu login agora!</p>
          <LinkNavigation
            style="blueLight"
            name="Login"
            linkTo="/login"
          ></LinkNavigation>
        </div>
      </section>
    </StyledRegister>
  );
};
