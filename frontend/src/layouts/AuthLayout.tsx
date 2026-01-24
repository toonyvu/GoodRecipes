import { Navigate, Outlet } from "react-router-dom";
import LoginNavBar from "../Components/Navbars/LoginNavBar";
import { useAuth } from "@/hooks/useAuth";

export default function AuthLayout() {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (user) {
    return <Navigate to="/home" replace />;
  }
  return (
    <>
      <LoginNavBar />
      <Outlet />
    </>
  );
}
