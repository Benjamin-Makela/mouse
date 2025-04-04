async function init() {
    const ws = new WebSocket("ws://localhost:8080");
    ws.addEventListener("message", (message) => { 
    });
    document.addEventListener("mousemove", (event) => {
        ws.send("hello it is me websocket");
    });
}