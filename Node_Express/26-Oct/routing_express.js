let express = require("express");// got access to application
let expressApp = express(); // ();

// Http call for base route
expressApp.get("/category", (req,res) => {
    res.write("This is my base route");
    res.end();
})

expressApp.get("/user", (req,res) => {
    res.redirect("/user/1");
})

expressApp.get("/user/:userId", (req,res) => {
    res.write("This is user " + req.params.userId);
    res.end();
})

//using regular expressions 
// expressApp.get(/^\/user\/(\d{2})$/, (req,res) => {
//     res.write("This is user " + req.params[0]);
//     res.end();
// })

expressApp.listen(8082, ()=> {
    console.log("server is up and running")
})