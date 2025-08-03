import express from "express";
import { addNotice , editNotice } from "../controllers/adminController.js";


const router = express.Router();

router.post("/addNotice",addNotice);
router.put("/editNotice/:id",editNotice);

export default router ;