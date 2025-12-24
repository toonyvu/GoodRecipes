import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "../Components/Item";
import { getRecipe } from "../api/recipes.api";

export default function ItemPage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    async function fetchRecipe(id) {
      const response = await getRecipe(id);
      setRecipe(response);
    }

    fetchRecipe(id);
  }, [id]);

  return <div>{!recipe ? <div>Loading...</div> : <Item food={recipe} />}</div>;
}
