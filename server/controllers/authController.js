import UserModel from "../models/Users.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    await UserModel.findOne({email}).select('+password').then((user)=>{
        if(!user){
            res.status(404).json({'message': 'User not registered'})
        }else{
            return user.correctPassword(password, user.password).then(isMatch=>{
                if(isMatch){
                    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'7 days'})
                    res.status(200).json({ status:'success', token, user})
                }
                else{ 
                    res.status(401).json({'message': 'Incorrect email or password'})
                }
            })
        }  
    })
} 