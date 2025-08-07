import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors"
import dbConnection from "./database/db.js";
import userRoutes from "./routes/userRoute.js"
import adminRoutes from "./routes/adminRoute.js";
import authRoutes from "./routes/authRoutes.js"
import complaintRoutes from "./routes/complaintRoute.js"
import reportRoutes from "./routes/lostOrFoundRoute.js"
dotenv.config();
const PORT = process.env.PORT ;

dbConnection();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.use(express.json());
app.use(urlencoded({extended : true}));




app.use("/api/v1/user",userRoutes);
app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user/complaint", complaintRoutes)
app.use("/api/v1/user/report", reportRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})