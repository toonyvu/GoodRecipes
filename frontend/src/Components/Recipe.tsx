import { useNavigate } from "react-router-dom";
import type { RecipeWithDetails } from "../Types/Recipe";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./ui/card";

type recipeDetailsProps = {
  food: RecipeWithDetails;
};

export default function Recipe({ food }: recipeDetailsProps) {
  const navigate = useNavigate();

  function getRecipe() {
    navigate(`/recipe/${food.id}`);
  }

  return (
    <Card className="w-[90%] place-self-center mb-5 mt-5 shadow-xl outline-2 outline-green-600">
      <CardContent className="flex flex-row">
        <img className="w-[25%] p-2 h-[25%] rounded-xl" src={food.image}></img>
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
      </CardContent>
    </Card>
  );
}
