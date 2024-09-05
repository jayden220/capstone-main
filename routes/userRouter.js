import express from 'express'
import bodyParser from 'body-parser';
import { getUsers,getUser,addUser,deleteUser,updateUser } from '../controller/userController.js';
import { verifyAToken,checkUser } from '../middleware/authenticate.js';

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

export {userRouter}