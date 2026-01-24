import "./App.css";
import Homepage from "./Pages/Homepage";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
function App() {
  const { loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="backgroundPattern min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/recipe/:id" element={<ItemPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
