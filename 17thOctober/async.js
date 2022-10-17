let add =  async  function (x,y) {
    return new Promise((resolve, reject) => {
        let sum = x + y;
        if(sum) {
            setTimeout(() => {
                resolve(sum);
            },3000)
        } else {
            reject("Error : Cannot add")
        }
    })
}

let sum =  await add(3,5);
console.log(sum)
