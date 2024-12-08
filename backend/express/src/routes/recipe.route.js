import { Router } from "express";
import { checkHealth, findRecipe } from "../controllers/recipe.controller.js";

const router = Router();
router.route('/').get(checkHealth);
router.route('/find-recipe').post(findRecipe);


export default router;