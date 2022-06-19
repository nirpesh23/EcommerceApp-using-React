import express from 'express';
import UserModel from '../models/Users.js';
import {registerUser, getUsers } from '../controllers/users.js';
import { loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/allUsers', getUsers);


export default router;