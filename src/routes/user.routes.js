import { Router } from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.controller.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;