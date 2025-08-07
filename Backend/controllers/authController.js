import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();


const registerUser = async(req , res)=>{
    try{
        const {username , email , password } = req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                success : false ,
                message : "username or email or password not provided"
            });
        }
        const emailExist = await User.findOne({email});
        if(emailExist){
            return res.status(403).json({
                success : false ,
                message  : "email already exist , try with another email"
            });
        }
        const salt =  await bcrypt.genSalt(10);
        const hashpassword =  await bcrypt.hash(password , salt);
        
        const newUser = await User({
            username ,
            email , 
            password : hashpassword
        });
        const saveUser = await newUser.save();
        if(!saveUser){
            return res.status(402).json({
                success : false ,
                message : "User cannot be registered"
            });
        }return res.status(200).json({
            success : true ,
            message : "User registered successfully"
        })
    }
    catch(err){
        console.log(err)
    }
}

const loginUser = async(req, res )=>{
    try{
        const {email , password } = req.body ;
        if(!email || !password ){
            return res.status(400).json({
                success : false , 
                message : "email or password required "
            });
        }
        const emailExist = await User.findOne({email});
        if(!emailExist){
            return res.status(404).json({
                success : false ,
                message : "Email doesnt exist"
            });
        }
        const verifyPassword = await bcrypt.compare(password , emailExist.password);
        if(!verifyPassword){
            return res.status(402).json({
                success : false ,
                message : "Password is incorrect"
            });
        }
        const accessToken = jwt.sign({
            userId: emailExist._id,
            username: emailExist.username,
            email: emailExist.email,
            role: emailExist.role
        }, process.env.JWT_SECRET_KEY, { expiresIn: "30m" });
        if(!accessToken){
            return res.status(400).json({
                success : false ,
                message : "Access token cannot  be created "
            });
        }
        return res.status(200).json({
            success : true ,
            message : "User registered successfully",
            token : accessToken
        })

    }
    catch(err){
        console.log(err)
    }
}


export {registerUser , loginUser}