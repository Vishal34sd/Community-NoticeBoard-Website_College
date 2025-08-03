import express, { urlencoded } from "express";
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import userRoutes from "./routes/userRoute.js"
import adminRoutes from "./routes/adminRoute.js";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();
const PORT = process.env.PORT ;

dbConnection();
const app = express();
app.use(express.json());
app.use(urlencoded({extended : true}));




app.use("/api/v1/user",userRoutes);
app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/auth",authRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})