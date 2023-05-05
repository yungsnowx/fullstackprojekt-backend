const express = require("express");
//const port = 3000;
const route_produkt = require("./Routes/route_Produkt");
const route_user = require("./Routes/route_user");
const route_address = require("./Routes/route_Address");
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
const app = express();
app.use(route_produkt);
app.use(route_address);
app.use(route_user);
// app.listen(port, () => {
//   console.log(`Shop-Backend app listening on port ${port}`);
// });

app.get("/",async (req,res) =>{
    res.status(200).json({message:"ok"});
})
module.exports = app;