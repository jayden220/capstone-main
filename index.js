import express from 'express'
import cors from 'cors'
import { productRouter } from './routes/productRouter.js'
import { userRouter } from './routes/userRouter.js'



const app = express()

const port = 3000

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

app.use(express.static('public'))
app.use('/product',productRouter)
app.use('/user',userRouter)

app.listen(port, ()=> {
    console.log('http://localhost:'+port);
    console.log('server listening');
    
})