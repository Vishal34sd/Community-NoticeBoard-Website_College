import express, { urlencoded } from "express";
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import userRoutes from "./routes/notice.js"
import adminRoutes from "./routes/admin.js"
dotenv.config();
const PORT = process.env.PORT ;

dbConnection();
const app = express();
app.use(express.json());
app.use(urlencoded({extended : true}));




app.use("/api/v1/user",userRoutes);
app.use("/api/v1/admin",adminRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})