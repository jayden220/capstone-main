import express from 'express';
import bodyParser from 'body-parser';
import { getProduct , getProducts , addProduct , editProduct , deleteProduct } from '../controller/productController.js'

const productRouter = express.Router();


productRouter.use(bodyParser.json());


productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/addProduct', addProduct);
productRouter.patch('/update/:id', editProduct);
productRouter.delete('/delete/:id', deleteProduct);

export { productRouter };
