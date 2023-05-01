const express = require("express");
//const port = 3000;
const route_produkt = require("./route_Produkt")


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
const app = express();
app.use(route_produkt);
// app.listen(port, () => {
//   console.log(`Shop-Backend app listening on port ${port}`);
// });
app.get("/",async (req,res) =>{
    res.status(200).json({message:"ok"});
})
module.exports = app;