import type { RecipeSummary } from "./RecipeList";

export type menuFormProps = {
  setMenu: React.Dispatch<React.SetStateAction<string>>;
};

export type searchProps = {
  setResult: React.Dispatch<React.SetStateAction<RecipeSummary[]>>;
};
