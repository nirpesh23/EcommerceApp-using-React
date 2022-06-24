import express from 'express';
import UserModel from '../models/Users.js';
import { getUsers, updateProfile } from '../controllers/users.js';
import { registerUser, loginUser, logout } from '../controllers/authController.js';
import { protect_routes } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/me', protect_routes, getUsers);

router.put('/', protect_routes, updateProfile);

router.get('/logout', protect_routes, logout); 
export default router;

//we have to check if the user is logged in or not before running handlers from controller 
//this is where we have to use middleware which will check if the user is logged in before running the handlers