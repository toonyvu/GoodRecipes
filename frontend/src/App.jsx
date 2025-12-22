import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import ItemPage from "./Pages/ItemPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="backgroundPattern min-h-screen">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/:id" element={<ItemPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
