import express from "express";
import { getAllNotice } from "../controllers/userNoticeController.js";
import authMiddleware from "../middleware/authMiddleware.js";



const router = express.Router();

router.get("/getNotice",authMiddleware ,getAllNotice)


export default router ;