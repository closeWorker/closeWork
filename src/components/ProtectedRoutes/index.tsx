import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoutes = () => {
  const {} = useContext(UserContext);

  return <Outlet />;
};
