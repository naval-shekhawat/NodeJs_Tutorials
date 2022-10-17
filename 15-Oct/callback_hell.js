function cheese(){
    console.log("Add lots of cheese");
}

function patty(cb){
    console.log("Add veggies and patties");
    cb();
}

function bun(cb){
    console.log("Take two fresh buns");
    cb(cheese);
}

function burger(){
    setTimeout(() => {
        bun(patty);
        console.log("Burger is ready")
    },1000)
}

burger();