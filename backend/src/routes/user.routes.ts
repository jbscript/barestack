import express from "express";
import * as userController from "../controllers/user.controller";
import auth from "../middleware/auth";

const router = express.Router();

// GET /api/users
router.get("/", auth, userController.getUsers);

// POST /api/users
router.post("/", userController.createUser);

export default router;
