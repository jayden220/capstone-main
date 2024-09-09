import express from 'express'
import bodyParser from 'body-parser';
import { getUsers,getUser,addUser,deleteUser,updateUser } from '../controller/userController.js';
import { verifyAToken,checkUser } from '../middleware/authenticate.js';

import { fetchCarts, fetchuserCart, fetchaddUserCart, fetchupdateUserCart, deleteItem, deleteCart } from '../model/cartDb.js';

// const express = require('express')
const userRouter = express.Router()

userRouter.use(bodyParser.json());

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/register',addUser)
userRouter.patch('/update/:id',updateUser)
userRouter.delete('/delete/:id',deleteUser)
userRouter.post('/login', verifyAToken,checkUser)
userRouter.post('/logout')

userRouter.get('/carts', fetchCarts ) 
userRouter.get('/:id/cart',fetchuserCart )
userRouter.post('/:id/cart', fetchaddUserCart ) 
userRouter.patch('/:id/cart/:productID', fetchupdateUserCart)
userRouter.delete('/:id/cart', deleteCart) 
userRouter.delete('/:id/cart/:productID', deleteItem)








export {userRouter}