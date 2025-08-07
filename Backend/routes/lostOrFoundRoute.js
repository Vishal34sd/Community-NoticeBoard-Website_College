import express from "express";
import { addLostOrFound } from "../controllers/lostOrFoundController.js";


const router = express.Router();

router.post("/addlostOrFound", addLostOrFound);

export default router ;