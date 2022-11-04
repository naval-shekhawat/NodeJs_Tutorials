function burger(){
    let clear = setInterval(() => {
        console.log("preparing burger");
    },2000);

    setTimeout(() => {
        clearInterval(clear);
        console.log("Burger is ready")
    },10000);
}

burger();
console.log("Preparing burger");
