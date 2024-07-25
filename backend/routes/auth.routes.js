import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/api/signup", signup);

router.post("/api/login", login);

router.post("/api/logout", logout);

export default router;
