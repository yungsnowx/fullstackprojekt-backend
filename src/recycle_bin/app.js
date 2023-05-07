const express = require("express");

//const port = 3000;
const bodyParser = require("body-parser");
const route_produkt = require("../routes/productRoutes");
const route_user = require("./route_user");
const route_address = require("../routes/adressRoutes");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(route_produkt);
app.use(route_address);
app.use(route_user);


app.get("/",async (req,res) =>{
    res.status(200).json({message:"ok"});
})

app.listen(port, () => {
    console.log(`Shop-Backend app listening on port ${port}`);
});
