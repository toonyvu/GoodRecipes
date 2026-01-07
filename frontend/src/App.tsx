import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import api from "./api/api";

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function restoreSession() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await api.get("/auth/me");
        setUser(res.data.user);
      } catch {
        localStorage.removeItem("accessToken");
      } finally {
        setLoading(false);
      }
    }

    restoreSession();
  }, []);

  if (loading) return null;

  return (
    <div className="backgroundPattern min-h-screen">
      <BrowserRouter>
        <Routes>
          {!user && (
            <Route element={<AuthLayout />}>
              <Route path="*" element={<Login />} />
            </Route>
          )}

          {user && (
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Homepage />} />
              <Route path="/recipe/:id" element={<ItemPage />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
