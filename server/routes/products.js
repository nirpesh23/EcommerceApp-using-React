import express from 'express';
import { getProducts, addProducts } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProducts);

export default router;