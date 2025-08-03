import express from "express";
import { getAllNotice } from "../controllers/userNoticeController.js";



const router = express.Router();

router.get("/getNotice",getAllNotice)


export default router ;