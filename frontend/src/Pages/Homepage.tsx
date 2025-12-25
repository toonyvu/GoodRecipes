import Search from "../Components/Search";
import RecipeList from "../Components/RecipeList";
import { useState } from "react";
import type { RecipeSummary } from "../Types/RecipeList";

export default function Homepage() {
  //The parent creates a state, then passes the setResult function to the child (Search).
  //The result prop itself is IMMUTABLE, you're calling the setResult function to change that prop inside
  //Search, which belongs to the Parent component.
  const [result, setResult] = useState<RecipeSummary[]>([]);
  return (
    <div>
      <Search setResult={setResult} />
      <RecipeList result={result} />
    </div>
  );
}
