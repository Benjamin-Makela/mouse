async function init() {
    const ws = new WebSocket("ws://bennybanana.live:8080");
    ws.addEventListener("open", (event) => {
        console.log("BENNYSOCKET CONNECTION");
        document.addEventListener("mousemove", (event) => {
        });
    });
    ws.addEventListener("message", (event) => { 
    });
    ws.addEventListener("close", (event) => {
    });
    ws.addEventListener("error", (event) => {
        console.error("BENNYSOCKET ERROR: ", event);
    }
    );
}