import api from "./api";

export const getRecipe = async (id) => {
  try {
    const res = await api.get(`/recipes/${id}`);
    return res.data;
  } catch (err) {
    console.log("An error occured:", err.message);
  }
};

export const getRecipes = async (searchString) => {
  try {
    const res = await api.get(`/recipes`, {
      params: { searchString },
    });
    return res.data;
  } catch (err) {
    console.log("An error occured: ", err.message);
  }
};
