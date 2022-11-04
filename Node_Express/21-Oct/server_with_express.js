let express = require("express");
let expressApp = express();
let bodyParser = require("body-parser");

let users = [{
    id : 1,
    name : "Vijay"
},{
    id:2,
    name :"Jayesh"
}];

expressApp.use(bodyParser.json())

expressApp.get("/", (request, response) => {
    response.json(users)
    response.end();
})


expressApp.get("/user/:userId", (request, response) => {
    response.write("user endpoint is ready");
    response.end();
})

expressApp.post("/", (req,res) => {
    const user = req.body;
    users.push(user);
    res.send("User added").status(200)
})

expressApp.delete("/user/:id", (req,res) => {
    let id = req.params.id;
    users = users.filter((user) => {
        return user.id != id;
    });

    res.send("User deleted").status(200);
})

expressApp.listen(8082, () => {
    console.log("server is up and running")
})