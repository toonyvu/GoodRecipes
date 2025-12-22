import Recipe from "./Recipe";
import { getRecipe } from "../api/recipes.api";

export default function RecipeList({ result }) {
  return (
    <div>
      {result.length > 0 ? (
        <div>
          {result.map((food) => (
            <Recipe key={food.id} food={food} getDetails={getRecipe} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="place-self-center mt-4">
            No Recipes found... Type something in the searchbar!
          </h1>
        </div>
      )}
    </div>
  );
}
