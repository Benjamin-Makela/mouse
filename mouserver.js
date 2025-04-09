const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");
const port = 80;

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (client) => {
    client.on("message", (event) => {
    });
});

wss.on("close", (client) => {
});

const acceptable = ["/", "/mouse.html", "/mouse.js"];
const server = http.createServer((req, res) => {
    if (acceptable.includes(req.url)) {
        let fd = req.url.substring(1);
        if (fd === "") {
            fd = "mouse.html";
        }
        let ct = fd.split(".");
        ct = fd[fd.length-1];
        if (ct === "html" || ct === "htm") {
            ct = "text/html";
        } else if (ct === "js") {
            ct = "text/javascript";
        }
        fs.readFile(path.join(__dirname, fd), (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Benny encountered an issue reading this one. Sorry for his illiteracy.</h1>");
            } else {
                res.writeHead(200, { "Content-Type": ct });
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