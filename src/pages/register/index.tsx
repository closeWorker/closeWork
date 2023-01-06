import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Button } from "../../components/Button";

import { LinkNavigation } from "../../components/LinkNavigation";
import { StyledRegister } from "./style";

import fullLogo from "../../assets/light-full-logo.svg"
import workersImg from "../../assets/workers-img.svg"

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;

}

export const Register = () => {

  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  })

  return (
    <StyledRegister>
      <section className="img-section">
        <img src={fullLogo} className="logo" alt="Logo Close Worker" />
        <img src={workersImg} className="workers-img" alt="imagem de profissões" />
      </section>
      <section className="form-section">
        <form action="submit" onSubmit={handleSubmit(x => console.log(x))} noValidate>

          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            {...register("email")}
            type="text"
            placeholder="Digite seu email"
          />
          {errors.email?.message && <p className="input-error">{errors.email.message}</p>}


          <label htmlFor="input-name">Nome</label>
          <input
            id="input-name"
            {...register("name")}
            type="text"
            placeholder="Digite seu nome"
          />
          {errors.name?.message && <p className="input-error">{errors.name.message}</p>}


          <label htmlFor="input-password">Senha</label>
          <input
            id="input-password"
            {...register("password")}
            type="text"
            placeholder="Digite sua senha"
          />
          {errors.password?.message && <p className="input-error">{errors.password.message}</p>}


          <label htmlFor="input-confirm-password">Confirmar senha</label>
          <input
            id="input-confirm-password"
            {...register("confirmPassword")}
            type="text"
            placeholder="Digite sua senha novamente"
          />
          {errors.confirmPassword?.message && <p className="input-error">{errors.confirmPassword.message}</p>}


          <label htmlFor="input-contact">Contato</label>
          <input
            id="input-contact"
            {...register("contact")}
            type="text"
            placeholder="(11)922223333"
          />
          {errors.contact?.message && <p className="input-error">{errors.contact.message}</p>}


          <Button
            type="submit"
            style="blueDark"
          >
            Cadastrar
          </Button>
        </form>
        <div>
          <p>Já possui conta? Realize seu login agora!</p>
          <LinkNavigation style="blueLight" name="Login" linkTo="/login"></LinkNavigation>
        </div>
      </section>
    </StyledRegister>
  )
};
