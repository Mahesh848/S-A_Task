const express = require('express');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
    }
    expressConfig() {
        this.app.set('view engine','html');
        this.app.use(express.static(__dirname+"/"));
    }
    includeRoutes() {
        this.app.get("/*",(req, res) => {
            res.sendFile(path.join(__dirname+"/index.html"));
        });
    }
    createServer() {

        this.expressConfig();
        this.includeRoutes();

        const port = 1848 || PORT;
        this.app.listen(port, (err) => {
            if(err) {
                console.log("Port Already in Use");
            }
            console.log("Server Listening on Port" + port);
        });
    }
}
const server = new Server();
server.createServer();
