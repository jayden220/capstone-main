import express from 'express'
import bodyParser from 'body-parser';
import { getUsers,getUser,addUser,deleteUser,updateUser,loginUser } from '../controller/userController.js';
import { verifyAToken,checkUser } from '../middleware/authenticate.js';

import { fetchCarts, fetchuserCart, fetchadduserCart, fetchupdateUserCart, deleteItem, deleteCart } from '../model/cartDb.js';

// const express = require('express')
const userRouter = express.Router()

userRouter.use(bodyParser.json());

userRouter.get('/', getUsers)
userRouter.get('/singleUser/:id', getUser)
userRouter.post('/register',addUser)
userRouter.patch('/:id',updateUser)
userRouter.delete('/:id',deleteUser)
userRouter.post('/login', checkUser,loginUser)
userRouter.post('/logout')

userRouter.get('/carts', fetchCarts ) 
userRouter.get('/:id/cart',fetchuserCart )
userRouter.post('/:id/cart', fetchadduserCart ) 
userRouter.patch('/:id/cart/:productID', fetchupdateUserCart)
userRouter.delete('/:id/cart', deleteCart) 
userRouter.delete('/:id/cart/:productID', deleteItem)








export {userRouter}