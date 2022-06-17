import express from 'express';
import UserModel from '../models/Users.js';
import {registerUser, loginUser, getUsers, testRegister} from '../controllers/users.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/allUsers', getUsers);

router.post('/testRegister', testRegister);


export default router;