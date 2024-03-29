import express from "express";
import { registerUser, loginUser, currentUser } from "../controllers/userControllers.js"
import validateToken from "../middlewares/validateToken.js"

const router=express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validateToken,currentUser);

export default router;