import { prisma } from "../../db.js"


export const getRecipes = async(req, res) => {
    try {
        const recipes = await prisma.recipes.findMany();

        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({ error: "error en el metodo GET", message: error.message });
    }

};



export const createRecipes = async(req, res) => {
    try {
        const { titulo, descripcion, ingredientes, reseñas } = req.body;

        const recipes = await prisma.recipes.create({
            data: {
                titulo,
                descripcion,
                ingredientes,
                reseñas
            },
        });
        res.status(201).json(recipes);

    } catch (error) {
        res.status(400).json({ error: "Error en el metodo POST", message: error.message });
    }
};

export const updateRecipes = async(req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, ingredientes, reseñas } = req.body;
        const existingRecipe = await prisma.recipes.findUnique({
            where: { id },
        });
        if (!existingRecipe) {
            return res.status(404).json({ error: "Receta no encontrada", message: "No se encontró la receta con ese ID" });
        }
        const updatedRecipe = await prisma.recipes.update({
            where: { id },
            data: {
                titulo,
                descripcion,
                ingredientes,
                reseñas,
            },
        });
        res.status(200).json(updatedRecipe);

    } catch (error) {
        res.status(400).json({ error: "Error en el metodo PUT", message: error.message });
    }
};


export const deletedRecipes = async(req, res) => {
    try {
        const { id } = req.params;

        const existingRecipe = await prisma.recipes.findUnique({
            where: { id },
        });
        if (!existingRecipe) {
            return res.status(404).json({ error: "Receta no encontrada", message: "La receta con ese ID no existe." });
        }
        const deletedRecipe = await prisma.recipes.delete({
            where: { id },
        });
        res.status(200).json({ message: "Receta eliminada con éxito", recipe: deletedRecipe });
    } catch (error) {
        res.status(400).json({ error: "Error en el método DELETE", message: error.message });
    }
};