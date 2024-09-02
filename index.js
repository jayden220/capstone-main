import express from 'express'
import cors from 'cors'




const app = express()

const port = 3000

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))
// app.use('/product',productRouter)
// app.use('/',navigate)

app.listen(port, ()=> {
    console.log('http://localhost:'+port);
    console.log('server listening');
    
})