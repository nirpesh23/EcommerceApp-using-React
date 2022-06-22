import express from 'express';
import UserModel from '../models/Users.js';
import { getUsers } from '../controllers/users.js';
import { registerUser, loginUser } from '../controllers/authController.js';
import { protect_routes } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/me', protect_routes, getUsers);


export default router;

//we have to check if the user is logged in or not before running handlers from controller 
//this is where we have to use middleware which will check if the user is logged in before running the handlers