import { request } from 'http';
import jwt from 'jsonwebtoken';
import {promisify} from 'util'; //{promisify} this is a ES6 destructuring of an object
import UserModel from '../models/Users.js';

//here, the route handler function will only run if the auth middleware function calls next function 
export const protect_routes = async (req, res, next) => {
    try {
        //step-1: checking if token is available in http requests
        let token;
        if( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await UserModel.findById(decoded.id)

            if(!user){ res.status(400).json({'message': 'user belonging to this token does no longer exists'}) } 
            req.user = user
            next()
        }else{
            return res.status(403).json({'message':"Not logged in"})
        }
    } catch (error) {
        res.status(403).json({'message': error.message})
    }
    
    
    // if(!token){ 
    //     res.status(403).json({'message':'please log in first'})
    // }

    //step-2: verify token (JWT algorithm verifies if the signature is valid or nor / token is valid or not )
    // const decoded = await promisify(jwt.verify(token, process.env.JWT_SECRET)).then()
}


//we cannot pass arguments to the middleware but we need to pass arguments of who can access routes 
//so we create a wrapper func which will return the middleware func that we want to create
export const restrictTo = (...roles) => {
    return (req, res, next)=>{ //this function will get access to the roles parameter
        if(!roles.includes(req.user.role)){
            res.status(403).json({'message':'You are not an administrator'})
        }
        next();
    }
}