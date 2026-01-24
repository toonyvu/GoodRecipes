import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";

import { useState, useEffect } from "react";
import { login } from "../../api/auth.api";
import { useAuth } from "@/hooks/useAuth";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

import type { menuFormProps } from "@/Types/Props";

export default function LoginForm({ setMenu }: menuFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useAuth();

  function toSignup() {
    setMenu("Signup");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const data = await login(email, password);
      console.log("Logged in!");
      setUser(data.user);
      console.log(data.user);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
      setIsLoading(false);
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
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Log in using your email and password.
            </CardDescription>
            <CardAction>
              No account?{" "}
              <button onClick={toSignup} className="text-blue-500">
                Sign up here:
              </button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="username">Email:</label>
              <input
                type="email"
                value={email}
                id="username"
                className="border p-2"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                id="password"
                className="border p-2"
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="bg-green-400 p-2 rounded transition duration-100 ease-linear hover:bg-green-600 hover:text-green-50"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login!"}
              </button>
              <button type="button" className="bg-gray-200 p-2 rounded">
                Login with Google
              </button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
