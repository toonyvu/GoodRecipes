import { useState } from "react";
import glass from "../assets/glass.png";
import { getRecipes } from "../api/recipes.api";
import type { searchProps } from "@/Types/Props";

export default function Search({ setResult }: searchProps) {
  const [query, setQuery] = useState("");

  async function updateRecipes() {
    const data = await getRecipes(query);
    setResult(data.results);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      updateRecipes();
    }
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
          onKeyDown={handleKeyDown}
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
