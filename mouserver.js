const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 80;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const dir = path.join(__dirname, "mouse.html");
        fs.readFile(dir, (data, err) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end();
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