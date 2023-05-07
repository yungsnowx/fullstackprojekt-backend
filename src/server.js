import express from 'express';
import bodyParser from 'body-parser';
import {router as productRouter} from './routes/productRoutes.js';

//const route_user = require("./routes/userRoutes");
//const route_address = require("./routes/adressRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(productRouter);
//app.use(route_address);
//app.use(route_user);

app.listen(port, () => {
    console.log("Shop-Backend server listening on " + port);
})
