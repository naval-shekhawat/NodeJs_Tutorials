function burger(){
    let clear = setTimeout(() => {
        console.log("Burger is ready");
    },2000);

    clearTimeout(clear);
}

burger();
console.log("Preparing burger");
