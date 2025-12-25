import api from "./api";

export const getRecipe = async (id: number) => {
  try {
    const res = await api.get(`/recipes/${id}`);
    return res.data;
  } catch (err: any) {
    console.log("An error occured:", err.message);
  }
};

export const getRecipes = async (searchString: string) => {
  try {
    const res = await api.get(`/recipes`, {
      params: { searchString },
    });
    return res.data;
  } catch (err: any) {
    console.log("An error occured: ", err.message);
  }
};
