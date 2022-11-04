let express = require("express");
let expressApp = express();
let bodyParser = require("body-parser");

let users = [{
    id: 123,
    name: "Manjula"
    },
    {
        id: 341,
        name: "Kiran"
    }
]

expressApp.use(bodyParser.json())

// "/"  parent 
expressApp.get("/users", (req,res) => {
    res.send(users).status(200);
    res.end();
})

// user/341  route 
expressApp.get(/^\/user\/(\d+)$/, (req, res) => {
    let searchedUser = users.find((user) => {
        return user.id == req.params[0]
    });
    res.send(searchedUser).status(200);
    res.end();
})

expressApp.post("/user", (req, res) => {
    const userToAdd = req.body; // { id : 123, name : "XYZ"}
    let userID = userToAdd.id;
    let isUserAlreadyAdded = users.find((user) => {
        return user.id == userID;
    });

    if(isUserAlreadyAdded) {
        res.status(400).send("User already exists");
        return;
    }
    users.push(userToAdd);
    res.send("User added").status(200);
    res.end();
})

expressApp.delete("/user/:userId", (req,res) => {
    let userIdToDelete = req.params.userId;
    users = users.filter((user) => {
        return user.id != userIdToDelete
    });
    res.send("User deleted").status(200);
    res.end();
})

expressApp.use(express.static('html'))  
expressApp.get("/", (req,res) => {
    res.sendFile("index.html")
})


expressApp.listen(8082, () => {
    console.log("Server is up and running");
}); 