import Recipe from "./Recipe";
import { getRecipe as fetchDetails } from "../api/recipes.api";
import { useEffect, useState } from "react";
import type { RecipeSummary } from "../Types/RecipeList";
import type { RecipeWithDetails } from "../Types/Recipe";

type recipeListProps = {
  result: RecipeSummary[];
};

export default function RecipeList({ result }: recipeListProps) {
  const [fullData, setFullData] = useState<RecipeWithDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllDetails() {
      if (!result) return;

      setLoading(true);

      try {
        const details = await Promise.all(
          result.map((food) => fetchDetails(food.id))
        );
        const merged = result.map((food, index: number) => ({
          ...food,
          details: details[index],
        }));
        setFullData(merged);
        setLoading(false);
      } catch (err: any) {
        console.log("An error occured: ", err.message);
      }
    }

    getAllDetails();
  }, [result]);

  if (!result)
    return <h1 className="place-self-center mt-2">Loading recipes...</h1>;
  if (loading)
    return <h1 className="place-self-center mt-2">Fetching Details...</h1>;
  return (
    <div>
      {fullData.map((food) => (
        <Recipe key={food.id} food={food}></Recipe>
      ))}
    </div>
  );
}
