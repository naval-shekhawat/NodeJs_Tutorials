let http = require("http");

let server = http.createServer((req,res)=> {
    switch (req.url) {
        case "/grocery":
            res.write("This is Grocery route");
            break;
        case "/clothing":
            res.write("This is clothing route");
            break;
        default:
            res.write("This is the Home route");
            break;
    }
    res.end();
});

server.listen(8082,() => {
    console.log("Server is up and running")
})