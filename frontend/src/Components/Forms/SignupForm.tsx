import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";

import { useNavigate } from "react-router-dom";

type menuFormProps = {
  menu: React.Dispatch<React.SetStateAction<string>>;
};

export default function SignupForm({ menu }: menuFormProps) {
  function toLogin() {
    menu("Login");
  }

  return (
    <div className="min-h-screen flex items-center flex-col bg-gray-100">
      <h1 className="mb-4 mt-15 font-bold text-5xl text-gray-700">
        Find, share and create recipes.
      </h1>
      <div>
        <Card className="w-125 mt-15">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Sign up by filling in these fields.
            </CardDescription>
            <CardAction>
              Already have an account?{" "}
              <button onClick={toLogin}>Login here:</button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <label htmlFor="email">Enter your Email:</label>
              <input type="text" id="email" className="border p-2" />

              <label htmlFor="username">Username:</label>
              <input type="text" id="username" className="border p-2" />

              <label htmlFor="repeatedUsername">Repeat your username:</label>
              <input type="text" id="repeatedUsername" className="border p-2" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="border p-2" />

              <label htmlFor="repeatedPassword">Repeat your password:</label>
              <input
                type="password"
                id="repeatedPassword"
                className="border p-2"
              />

              <button className="bg-green-400 p-2 rounded">Sign up!</button>
              <button className="bg-gray-200 p-2 rounded">
                Signup with Google
              </button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
