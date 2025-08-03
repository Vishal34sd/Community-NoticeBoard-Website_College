import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const dbConnection = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        if(!connection){
            console.log("Connection failed");
        }
        console.log("Database connected successfully");
    }
    catch(err){
        console.log(err);
    }
}

export default dbConnection ;