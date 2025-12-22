import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  function toHome() {
    navigate(`/`);
  }
  return (
    <div className="flex flex-row items-center gap-8 sticky top-0 bg-green-500 shadow-md shadow-green-900 h-15 w-full">
      <img src={logo} alt="" className="ml-4 w-15 h-15" />
      <h1 className="text-xl flex-none font-extrabold font-montserrat">
        GoodRecipes
      </h1>
      <div
        className="flex items-center h-full p-4 transition duration-100 ease-linear hover:bg-green-600 hover:border-b-2 hover:border-amber-50"
        onClick={toHome}
      >
        <h1 className="text-xl font-montserrat font-bold">Home</h1>
      </div>
    </div>
  );
}
