const http = require("http");
const port = 80;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<p>So this works I guess.</p>");
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