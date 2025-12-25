import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "../Components/Item";
import { getRecipe } from "../api/recipes.api";

export default function ItemPage() {
  const { id } = useParams<{ id: string }>();

  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    if (!id) return;

    const numericId = Number(id);
    async function fetchRecipe(id: number) {
      const response = await getRecipe(id);
      setRecipe(response);
    }

    fetchRecipe(numericId);
  }, [id]);

  return <div>{!recipe ? <div>Loading...</div> : <Item food={recipe} />}</div>;
}
