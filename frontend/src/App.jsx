import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import ItemPage from "./Pages/ItemPage";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="backgroundPattern min-h-screen">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/recipe/:id" element={<ItemPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
