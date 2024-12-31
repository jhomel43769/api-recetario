import express from "express";
import recetasRoutes from "./src/routes/recetas.routes.js";
import userRoutes from "./src/routes/recetas.routes.js";
import morgan from "morgan";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/api", recetasRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});