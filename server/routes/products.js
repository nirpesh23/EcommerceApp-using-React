import express from 'express';
import { getProducts, addProducts } from '../controllers/products.js';
import { protect_routes, restrictTo } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', 
        protect_routes, 
        restrictTo('admin'),
        addProducts);

export default router;