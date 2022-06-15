import express from 'express';
import { postfunc, createPost, getUsers, createProducts, getProducts, addToCart} from '../controllers/posts.js';

const router = express.Router();

// @route        GET posts/
// @description  all routes
// @access       Public  
router.get('/', postfunc);
router.post('/', createPost);
router.get('/users', getUsers);
router.get('/products', getProducts);
router.post('/addproducts', createProducts);
router.post('/addtocart', addToCart);


export default router;