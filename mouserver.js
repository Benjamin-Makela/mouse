const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");
const port = 80;

const wss = new WebSocket.Server({ port: 8080 });
const mouses = [];
setInterval(() => {
    if (mouses.length != 0) {
        console.log("List of mice:");
        mouses.forEach((mouse) => {
            console.log(mouse);
        });
        console.log();
    }
}, 1000);

wss.on("connection", (client) => {
    console.log("websocket connection");
    client.on("message", (event) => {
        console.log(event.data);
    });
});

wss.on("close", (client) => {
    console.log("websocket disconnect");
});

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const dir = path.join(__dirname, "mouse.html");
        fs.readFile(dir, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Error. Benny does not store files here.</h1>");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Not working yo. There is no page with this address.");
    }
});

server.listen(port, "0.0.0.0", function (error) {
    if (error)
        console.error("It failed. The server failed.");
    else
        console.log("Server is running on port " + port);
});