import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "../Components/Item";

export default function ItemPage() {
  const { id } = useParams();
  const URL = `https://api.spoonacular.com/recipes/${id}/information`;
  const apiKey = "322c9007f775479eb930ddbbc4f58cfb";

  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await response.json();
      setRecipe(data);
    }

    getRecipe();
  }, []);

  return <div>{!recipe ? <div>Loading...</div> : <Item food={recipe} />}</div>;
}
