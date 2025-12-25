import { useNavigate } from "react-router-dom";

export default function Recipe({ food }) {
  const navigate = useNavigate();

  function getRecipe() {
    navigate(`/recipe/${food.id}`);
  }

  return (
    <div className="flex flex-row  rounded-xl align-middle outline-4 outline-green-600 w-[90%] place-self-center m-4 p-5 shadow-md shadow-green-900">
      <img className="w-[25%] p-2 h-[25%]" src={food.image}></img>
      <div className="flex flex-col">
        <h1 className="place-self-center font-bold text-3xl m-1">
          {food.title}
        </h1>
        <h2 className="m-0.5">
          Ready in: {food.details.readyInMinutes} minutes
        </h2>
        <h2 className="m-0.5">Servings: {food.details.servings}</h2>
        <div className="buttonContainer">
          <button
            className="bg-green-500 p-1.5 rounded text-black transition duration-200 ease-linear hover:bg-green-800 hover:text-white"
            onClick={getRecipe}
          >
            View Recipe:
          </button>
        </div>
      </div>
    </div>
  );
}
