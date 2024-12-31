import { Router } from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users/:id", createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);

export default router;