import "./App.css";
import Homepage from "./Pages/Homepage";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
function App() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="backgroundPattern min-h-screen">
      <BrowserRouter>
        <Routes>
          {!user && (
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
          )}

          {user && (
            <Route element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
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
