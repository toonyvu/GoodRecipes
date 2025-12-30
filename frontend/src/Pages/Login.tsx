import LoginForm from "../Components/Forms/LoginForm";
import SignupForm from "@/Components/Forms/SignupForm";

import { useState } from "react";

export default function Login() {
  const [menu, setMenu] = useState<string>("Login");
  if (menu === "Login") {
    return (
      <>
        <LoginForm menu={setMenu}></LoginForm>
      </>
    );
  } else {
    return (
      <>
        <SignupForm menu={setMenu}></SignupForm>
      </>
    );
  }
}
