import { useState } from "react";
import glass from "../assets/glass.png";
import { getRecipes } from "../api/recipes.api";
import type { RecipeSummary } from "../Types/RecipeList";

type searchProps = {
  setResult: React.Dispatch<React.SetStateAction<RecipeSummary[]>>;
};

export default function Search({ setResult }: searchProps) {
  // WHAT ARE HOOKS?
  //Hooks are always placed inside React components!
  //Some hooks are useState, useEffect, useReducer...

  const [query, setQuery] = useState("");

  //UseEffect Hook. Syntax is CALLBACK FUNCTION (() => {}), followed by a dependecy array. ([])
  //Functions INSIDE useEffect are ran if values in dependency array changes. If left blank, it runs once when page refreshes.
  /*useEffect(() => {
    //Use of async, await keywords. when adding await, it will wait until the process is finished before moving to the next line.
    async function getRecipes() {
      // Like here, response has to finish executing (returning an array) before data is JSONified.
      const response = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);

      //Similarly, the data has to be JSONified before the console can log the results.
      const data = await response.json();
      setResult(data.results);
    }

    //This method is called every time the dependency array changes (so every time query is changed.)
    getRecipes();
  }, [query]); */

  async function updateRecipes() {
    const data = await getRecipes(query);
    setResult(data.results);
  }

  return (
    <div>
      <div className="mt-5 flex justify-center">
        <input
          className="pl-2  w-[40%] h-7 pb-0 border-b-2 border-b-black focus:outline-none transition duration-300 ease-linear focus:border-green-700"
          value={query}
          placeholder="Type in recipe (e.g. Pizza, Pasta...)"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
        />
        <img
          className="w-8 h-8 hover:transition duration-300 ease-linear hover:w-9 hover:h-9"
          src={glass}
          alt=""
          onClick={updateRecipes}
        />
      </div>
    </div>
  );
}
