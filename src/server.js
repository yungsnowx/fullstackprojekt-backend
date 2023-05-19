import express from 'express'
import bodyParser from 'body-parser'
import {router as productRouter} from './routes/productRoutes.js'
import {router as userRouter} from './routes/userRoutes.js'
import {router as addressRouter} from './routes/addressRoutes.js'
import {router as orderRouter} from './routes/orderRoutes.js'
import {router as cartRouter} from './routes/cartRoutes.js'
import {router as cartContentRouter} from './routes/cartContentRoutes.js'
import {router as userAddressRouter} from './routes/userAddressRoutes.js'
import {initKeycloak} from "./config/keycloak.js";

const app = express()
const port = process.env.PORT || 3000
const keycloak = initKeycloak()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(keycloak.middleware())

app.use(productRouter)
app.use(addressRouter)
app.use(userRouter)
app.use(orderRouter)
app.use(cartRouter)
app.use(cartContentRouter)
app.use(userAddressRouter)

app.get('/keyclaoktestuser', keycloak.protect('user'), (req, res) => {
    res.send("Hello User!")
})

app.get('/keyclaoktestadmin', keycloak.protect('admin'), (req, res) => {
    res.send("Hello Admin!")
})

app.get('/keyclaoktestall', keycloak.protect(['user', 'admin']), (req, res) => {
    res.send("Hello All!")
})

app.listen(port, () => {
    console.log("Shop-Backend server listening on " + port)
})
