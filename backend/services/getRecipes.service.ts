export const fetchRecipes = async (searchString: string) => {
  try {
    const apiKey = process.env.SPOONACULAR_API_KEY;
    const baseURL = process.env.API_BASE_URL;
    const res = await fetch(
      `${baseURL}/recipes/complexSearch?query=${searchString}&apiKey=${apiKey}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch recipes.");
    }
    const data = res.json();
    return data;
  } catch (err: any) {
    console.log("An Error occured: ", err.message);
  }
};
