import type { RecipeSummary } from "./RecipeList";

export type Ingredient = {
  id: number;
  name: string;
};

export type InstructionStep = {
  number: number;
  step: string;
  ingredients: Ingredient[];
};

export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;

  analyzedInstructions: {
    steps: InstructionStep[];
  }[];
};

export type itemProps = {
  food: Recipe;
};

export type RecipeWithDetails = RecipeSummary & {
  details: Recipe;
};
