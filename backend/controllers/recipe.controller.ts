import { Request, Response } from "express";
import { fetchRecipe } from "../services/getRecipe.service";

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recipe = await fetchRecipe(id);

    res.json(recipe);
  } catch (err: any) {
    console.log("An error occured", err.message);
  }
};
