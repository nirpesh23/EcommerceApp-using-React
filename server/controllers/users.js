import UserModel from "../models/Users.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
    UserModel.find({}).then((users)=>{
        res.status(200).json({
            success: true,
            results: users.length,
            data: {
                Users : users
            }
        })
    })
}

export const registerUser = async (req, res) => {
    //we have to take val from only the fields we need, if we use req.body than any user can send its role as an admin
    const { name, email, password, confirmPassword} = req.body    
    const newUser = new UserModel({ name, email, password, confirmPassword})
    
    //unique JWT token is generated which is a unique string for that user when email password is correct
    //server then sends this token back to the client which will be stored in a cookie or local storage so there is no state stored in the server
    const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET, {
        expiresIn: '7 days'  
    })
    //this is how user is authenticated and logged in application / a password to access protected routes to our application
    //If a user wants to access protected routes like profile page then this JWT along with the request
    await newUser.save().then((user)=>{
        res.json({
            status: 'success',
            token,
            message: 'User saved successfully',
            data: {user}
        })
        }).catch((err)=>{
            res.json({
                success: false,
                message: err.message
                })
        })
}


export const findUserById = async (req, res) => {
    const _id = req.params.id
    try{
        const user = await UserModel.findById(_id)
        if(!user){
            return res.status(404).send()
        }else{
            return res.send(user)
        }
    }
    catch (e){
        res.status(500).send()
    }
}

