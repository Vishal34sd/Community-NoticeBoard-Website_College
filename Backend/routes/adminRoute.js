import express from "express";
import { addNotice , deleteNotice, editNotice, getAllComplaint } from "../controllers/adminController.js";
import { getAllNotice } from "../controllers/userNoticeController.js";


const router = express.Router();
router.get("/fetchNotice", getAllNotice);
router.get("/fetchComplaint", getAllComplaint);
router.post("/addNotice",addNotice);
router.put("/editNotice/:id",editNotice);
router.delete("/deleteNotice/:id",deleteNotice);

export default router ;