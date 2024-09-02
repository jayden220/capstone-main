import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/productDb.js'

const productRouter = express.Router()

productRouter.use(bodyParser.json())

productRouter.get('/', (req, res) => {
    products.getProducts(req, res)
})
productRouter.get('/:id', (req, res) =>{
    products.getProduct(req, res)
})
productRouter.post('/addProduct', (req, res) => {
    products.addProduct(req, res)
})
productRouter.patch('/update/:id', (req, res) => {
    products.editProduct(req, res)
})
productRouter.delete('/delete/:id', (req, res) => {
    products.deleteProduct(req, res)
})
export {productRouter}