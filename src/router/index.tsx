import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { ViewMore } from "../pages/ViewMore";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/view-more/movel-planejado"
            element={<ViewMore />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
