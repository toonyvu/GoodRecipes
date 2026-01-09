import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";
import api from "../api/api";

export type AuthContextType = {
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider.");
  return context;
}
