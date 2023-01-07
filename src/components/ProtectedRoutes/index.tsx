import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoutes = () => {
  const { tokenIsValid, userValid } = useContext(UserContext);

  if (!tokenIsValid) {
    return null;
  }

  return userValid ? <Outlet /> : <Navigate to="/login" />;
};
