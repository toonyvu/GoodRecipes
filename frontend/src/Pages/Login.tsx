import LoginForm from "../Components/Forms/LoginForm";
import SignupForm from "@/Components/Forms/SignupForm";

import { useState } from "react";

export default function Login() {
  const [menu, setMenu] = useState<string>("Login");
  if (menu === "Login") {
    return (
      <>
        <LoginForm setMenu={setMenu}></LoginForm>
      </>
    );
  } else {
    return (
      <>
        <SignupForm setMenu={setMenu}></SignupForm>
      </>
    );
  }
}
