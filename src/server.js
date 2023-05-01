const http  = require("http")
const app = require("./app")

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

const errorHandling = error =>{
    if(error.syscall != "listen"){
        throw  error;
    }
    const address = server.address();
    const bind = typeof address === "string"? "Pipe "+ address: "Port "+ address.port;
    switch (error.code) {
        case EACCES:
            console.log(bind + " required a eleved grade");
            process.exit(1);
            break;
        case EADDRINUSE:
            console.log(bind + " already use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
const port = normalizePort(process.env.PORT||3000);
app.set(port);
const server = http.createServer(app)
server.on("listening",() =>{
    const address = server.address();
    const bind = typeof address === "string"? "Pipe "+ address: "Port "+ address.port;
    console.log("Shop-Backend app listening on " + bind);
    })

server.on("error", errorHandling);

server.listen(port);