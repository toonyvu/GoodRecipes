import { Router } from "express";
import { getRecipe } from "../controllers/recipe.controller";
import { getRecipes } from "../controllers/recipes.controller";

const router = Router();

router.get("/:id", getRecipe);

router.get("/", getRecipes);

export default router;
