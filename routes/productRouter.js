import express from 'express';
import bodyParser from 'body-parser';
import { getProduct , getProducts , addProduct , editProduct , deleteProduct } from '../controller/ProductController.js'

const productRouter = express.Router();

// Middleware to parse JSON bodies
productRouter.use(bodyParser.json());

// Route Handlers
productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/addProduct', addProduct);
productRouter.patch('/update/:id', editProduct);
productRouter.delete('/delete/:id', deleteProduct);

export { productRouter };
