import express from 'express';
import { postfunc, createPost, getUsers, createProducts, createUser, getProducts, addToCart} from '../controllers/posts.js';



const router = express.Router();

router.get('/', postfunc);
router.post('/', createPost);
router.get('/users', getUsers);
router.post('/user', createUser);
router.get('/products', getProducts);
router.post('/addproducts', createProducts);
router.post('/addtocart', addToCart);


export default router;