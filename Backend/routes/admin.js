import express from "express";
import { addNotice , deleteNotice, editNotice } from "../controllers/adminController.js";
import { getAllNotice } from "../controllers/userNoticeController.js";


const router = express.Router();
router.get("/fetchNotice", getAllNotice)
router.post("/addNotice",addNotice);
router.put("/editNotice/:id",editNotice);
router.delete("/deleteNotice/:id",deleteNotice);

export default router ;