import { Request, Response } from "express";
import { fetchRecipes } from "../services/getRecipes.service";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const searchString = req.query.searchString as string;
    const recipes = await fetchRecipes(searchString);

    res.json(recipes);
  } catch (err: any) {
    console.log("An error occured", err.message);
  }
};
