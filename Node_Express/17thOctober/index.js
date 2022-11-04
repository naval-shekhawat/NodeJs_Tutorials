let getPositiveNumbers = function(item) {
    return item > 0 ? item : ""
}

let getNegativeNumbers = function(item) {
    return item < 0 ? item : ""
}

let getEvenNumbers = function(item) {
    return item % 2 ==  0 ? item : ""
}

let filter = function(arr, callback) {
    let output = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        let value = callback(arr[i])
        if(value) {
            output.push(arr[i])
        };
    }

    return output;
}

let arr = [2,5,-1,-10,4];
let positives = filter(arr,getPositiveNumbers);
let negatives = filter(arr,getNegativeNumbers);
let even = filter(arr,getEvenNumbers);

console.log(positives);
console.log(negatives);
console.log(even);

// 8390019884
