import UserModel from "../models/Users.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
    try {
        res.status(200).send(req.user)   
    } catch (error) {
        res.status(404).send(error.message)
    }
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

