import User from "../model/userSchema.js";
import bcrypt from "bcrypt";


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


export {registerUser}