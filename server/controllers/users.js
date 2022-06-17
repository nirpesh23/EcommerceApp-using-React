import UserModel from "../models/Users.js"
import bcrypt from 'bcryptjs';


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

        const newUser = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            })

        await newUser.save().then(()=>{
            alert('User saved successfully')
            res.json({
                success: true,
                message: 'User saved successfully',
                user
            })
         }).catch((err)=>{
                res.json({
                    success: false,
                    message: err.message
                })
            })
}

export const loginUser = (req, res) => {

}



export const testRegister = async (req, res) => {
    UserModel.findOne({name: req.body.name})
        .then((user)=>{
            if(user){
                return res.json({
                    success: false,
                    message:"User already registered"
            })
            }else{
                return bcrypt.hash(req.body.password, 8)
            }
    }) .then((hasedPassword)=>{
            const newUser = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            return newUser.save();
        })
        .catch((err)=>{
            console.log(err.message)
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

