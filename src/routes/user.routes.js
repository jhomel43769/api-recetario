import { Router } from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controller/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", createUser);
router.get("/users", updateUser);
router.get("/users", deleteUser);

export default router;