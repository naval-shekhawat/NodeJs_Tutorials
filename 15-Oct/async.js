function greet(cb){
    setTimeout(() => {
        cb();
    },1000)
    console.log("Greeting!!!!");
}

function welcome(){
    console.log("Welcome to relevel")
}

greet(welcome);