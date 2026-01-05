import { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";

import { signup } from "../../api/auth.api";
import type { menuFormProps } from "@/Types/Props";

export default function SignupForm({ setMenu }: menuFormProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [confirmUsername, setConfirmUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  function toLogin() {
    setMenu("Login");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      if (username !== confirmUsername) {
        throw new Error("Usernames do not match.");
      } else if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      } else {
        const data = await signup(email, username, password);
        console.log("Account created", data);

        setMenu("Login");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err);
    }
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
              <button onClick={toLogin} className="text-blue-500">
                Login here:
              </button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="email">Enter your Email:</label>
              <input
                type="text"
                id="email"
                className="border p-2"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="border p-2"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <label htmlFor="repeatedUsername">Repeat your username:</label>
              <input
                type="text"
                id="repeatedUsername"
                className="border p-2"
                onChange={(e) => setConfirmUsername(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="border p-2"
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="repeatedPassword">Repeat your password:</label>
              <input
                type="password"
                id="repeatedPassword"
                className="border p-2"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && <p className="text-red-500">{error}</p>}

              <button className="bg-green-400 p-2 rounded" type="submit">
                Sign up!
              </button>
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
