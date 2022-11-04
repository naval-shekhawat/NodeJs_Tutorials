function* getPrices(){
    yield "$1000";
    yield "$2000";

    return "$100000"
}

let it = getPrices();
console.log(it.next());
console.log(it.next());
console.log(it.next());