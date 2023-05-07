const express = require("express");
const bodyParser = require("body-parser");
const route_produkt = require("./routes/route_Produkt");
const route_user = require("./routes/route_user");
const route_address = require("./routes/route_Address");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(route_produkt);
app.use(route_address);
app.use(route_user);


const normalizePort  = (val) =>{
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    else{
        return false;
    }
}
const port = normalizePort(process.env.PORT||3000);

const errorHandling = error =>{
    if(error.syscall != "listen"){
        throw  error;
    }
    switch (error.code) {
        case EACCES:
            console.log(port + " required a eleved grade");
            process.exit(1);
            break;
        case EADDRINUSE:
            console.log(port + " already use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = app.listen(port);
app.get("/",(req,res) =>{
    res.send("Super");
})
server.on("listening",() =>{
    console.log("Shop-Backend server listening on " + port);
})


server.on("error", errorHandling);