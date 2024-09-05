import express from 'express'
import cors from 'cors'
import { productRouter } from './routes/productRouter.js'
import { userRouter } from './routes/userRouter.js'



const app = express()

const port = 3000

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))

app.use(express.static('public'))
app.use('/product',productRouter)
app.use('/user',userRouter)

app.listen(port, ()=> {
    console.log('http://localhost:'+port);
    console.log('server listening');
    
})