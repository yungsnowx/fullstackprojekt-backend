const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser")

const route_produkt = require("./routes/route_Produkt");
const route_user = require("./routes/route_user");
const route_address = require("./routes/route_Address");

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
