function square(item) {
    return item * item;
}

function divideBy5(item){
    return item /5;
}

function squareRoot(item){
    return Math.sqrt(item);
}

let arr = [2,4,1,6,5];
// Square
console.log(arr.map(square));

//DivideBy5 callback
let arr1 = [10,45,15,20,100];
console.log(arr1.map(divideBy5));

 //Squareroot callback
console.log(arr.map(squareRoot));


