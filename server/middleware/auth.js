import { request } from 'http';
import jwt from 'jsonwebtoken';
import {promisify} from 'util'; //{promisify} this is a ES6 destructuring of an object
import UserModel from '../models/Users.js';

//here, the route handler function will only run if the auth middleware function calls next function 
export const protect_routes = async (req, res, next) => {
    try {
        let token;
        if( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
            token = req.headers.authorization.split(' ')[1]
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UserModel.findById(decoded.id)

        if(!user){ throw new Error() } //res.json({'message': 'user belonging to this token does no longer exists'})
        req.user = user
        
    } catch (error) {
        res.status(403).json({'message': error.message})
    }
    // let token;
    // //step-1: checking if token is available in http requests
    // if( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
    //     // token = req.header.authorization.split(' ')[1];
    //     console.log(req.headers.authorization.split(' ')[1]);
    // }
    // if(!token){ 
    //     res.status(403).json({'message':'please log in first'})
    // }

    //step-2: verify token (JWT algorithm verifies if the signature is valid or nor / token is valid or not )
    // const decoded = await promisify(jwt.verify(token, process.env.JWT_SECRET)).then()
    next()
}
