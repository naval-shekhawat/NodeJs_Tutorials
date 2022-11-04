let express = require("express");
let expressApp = express();


expressApp.get("/", (req, res) => {
    res.write("Base route");
    res.end();
})

// expressApp.get(/^\/users\/(\d+)$/,

expressApp.get(/^\/user\/(\d+)$/, (req, res) => {
    res.write("User route" + req.params[0]);
    res.end();
})

expressApp.get("/user", (req, res) => {
   res.redirect("/user/1")
})


expressApp.listen(8082, () => {
    console.log("server is up and running");
})