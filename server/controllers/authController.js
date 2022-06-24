import UserModel from "../models/Users.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { request } from "express";
import { sendToken } from "../utils/jwtToken.js";


export const registerUser = async (req, res) => {
    //we have to take val from only the fields we need, if we use req.body than any user can send its role as an admin
    const { name, email, password, confirmPassword} = req.body    
    UserModel.findOne({ email}).then(async (user)=>{
        if(user){ return res.status(400).json({'message':'Email already registered'})}
    })
    const newUser = new UserModel({ name, email, password, confirmPassword})

    //server then sends this token back to the client which will be stored in a cookie or local storage so there is no state stored in the server
    //this is how user is authenticated and logged in application / a password to access protected routes to our application
    //If a user wants to access protected routes like profile page then this JWT along with the request
    await newUser.save().then((user)=>{
       sendToken(user, 201, res)
        }).catch((err)=>{
            console.log(err.message)
            res.json({success: false, message: err.message})
        })
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(403).json({'message': 'Please provide your credentials'})
    }else{
        await UserModel.findOne({email}).select('+password').then(user=>{
            if(!user){
                res.status(404).json({'message': 'User not registered'})
            }else{
                return user.correctPassword(password, user.password).then(isMatch=>{
                    if(isMatch){
                        sendToken(user, 200, res)
                    }
                    else{
                        res.status(401).json({'message':'Invalid email or password'})
                    }
                })
            }
        })
    }
} 

export const logout = async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message:'Logged out'
    })
}

