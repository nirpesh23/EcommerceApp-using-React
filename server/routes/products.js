import express from 'express';
import { getProducts, addProducts, updateProduct, getSingleProduct } from '../controllers/products.js';
import { protect_routes, restrictTo } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getSingleProduct);

router.post('/', 
        protect_routes, 
        restrictTo('admin'),
        addProducts);

router.put('/:id', updateProduct)
export default router;