import { Outlet } from "react-router-dom";
import LoginNavBar from "../Components/Navbars/LoginNavBar";

export default function MainLayout() {
  return (
    <>
      <LoginNavBar />
      <Outlet />
    </>
  );
}
