import "./App.css";
import Homepage from "./Pages/Homepage";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="backgroundPattern min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />}></Route>
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/recipe/:id" element={<ItemPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
