export type RecipeSummary = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type RecipeSearchResponse = {
  results: RecipeSummary[];
  offset: number;
  number: number;
  totalResults: number;
};
