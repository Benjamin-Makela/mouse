const http = require("http");
const port = 80;

http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead({ "Content-Type": "text/html" });
        res.end(200, "<p>So this works I guess.</p>");
    } else {
        res.writeHead({ "Content-Type": "text/html" });
        res.end(404, "Not working yo. There is no page with this address.");
    }
});

server.listen(port, "0.0.0.0", function (error) {
    if (error)
        console.error("It failed. The server failed.");
    else
    console.log("Server is running on port " + port);
});