import { Router } from "express";
import {
    getRecipes,
    createRecipes,
    updateRecipes,
    deletedRecipes
} from "../controller/recetas.controller.js"

const router = Router();

router.get("/recipes", getRecipes);
router.post("/recipes", createRecipes);
router.put("/recipes/:id", updateRecipes);
router.delete("/recipes/:id", deletedRecipes);

export default router;