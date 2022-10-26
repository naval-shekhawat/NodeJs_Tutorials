function* powerOfThree(){
    let count = 1;
    while(true) {
        yield Math.pow(3,count);
        count++;
    }
}

let it = powerOfThree();
for(let i = 0 ;i < 10; i++) {
    console.log(it.next().value);
}

