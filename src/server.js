import express from 'express'
import bodyParser from 'body-parser'
import {router as productRouter} from './routes/productRoutes.js'
import {router as userRouter} from './routes/userRoutes.js'
import {router as addressRouter} from './routes/addressRoutes.js'
import {router as orderRouter} from './routes/orderRoutes.js'
import {router as cartRouter} from './routes/cartRoutes.js'


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(productRouter)
app.use(addressRouter)
app.use(userRouter)
app.use(orderRouter)
app.use(cartRouter)

app.listen(port, () => {
    console.log("Shop-Backend server listening on " + port)
})
