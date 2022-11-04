let add = function(x) {
    return function(y){ // 1
        return function(z) {
            return x + y + z;
        }
    }
}

let output = add(5)(1)(4)  // currying
console.log(output);