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
