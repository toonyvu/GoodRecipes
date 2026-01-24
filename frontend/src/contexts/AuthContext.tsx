import { createContext, useEffect, useState } from "react";

import type { ReactNode } from "react";
import api from "../api/api";
import { logout as logoutApi } from "../api/auth.api";

export type AuthContextType = {
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
  logout: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function logout() {
    try {
      await logoutApi();
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setUser(null);
    }
  }

  useEffect(() => {
    async function restoreSession() {
      const token = localStorage.getItem("accessToken");
      console.log("Token: ", token);
      console.log(loading);
      if (!token) {
        console.log("No Token");
        setLoading(false);
        return;
      }

      try {
        console.log("Getting auth data..");
        const res = await api.get("/auth/me");
        console.log("Got data!");
        setUser(res.data.user);
        console.log(res.data.user);
      } catch (err: any) {
        localStorage.removeItem("accessToken");
        console.log("test");
      } finally {
        setLoading(false);
      }
    }

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
