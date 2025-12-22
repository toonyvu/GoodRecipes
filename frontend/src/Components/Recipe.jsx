import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Recipe({ food, getDetails }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getDetails(food.id);
      setDetails(response);
    }
    fetchData();
  }, [food.id, getDetails]);

  console.log(details);

  function getRecipe() {
    navigate(`/${food.id}`);
  }

  if (!details) return <h1 className="place-self-center">Loading...</h1>;
  else
    return (
      <div className="flex flex-row  rounded-xl align-middle outline-4 outline-green-600 w-[90%] place-self-center m-4 p-5 shadow-md shadow-green-900">
        <img className="w-[25%] p-2 h-[25%]" src={food.image}></img>
        <div className="flex flex-col">
          <h1 className="place-self-center font-bold text-3xl m-1">
            {food.title}
          </h1>
          <h2 className="m-0.5">Ready in: {details.readyInMinutes} minutes</h2>
          <h2 className="m-0.5">Servings: {details.servings}</h2>
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
