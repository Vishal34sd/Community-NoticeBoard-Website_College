import  express from "express";
import { addComplaint } from "../controllers/compaintController.js";


const router = express.Router();


router.post("/addComplaint", addComplaint);



export default router ;