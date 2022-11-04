// let promise1 = new Promise((resolve, reject) => {
//         resolve(10000)
// });

// promise1.then((data) => {
//     console.log(data);})
// .catch((err) => {
//     console.log(err)})
// .finally(() => {
//     console.log("I will be printed irrepective of resolve /reject")
// })


// let add = function (x,y) {
//     return new Promise((resolve, reject) => {
//         let sum = x + y;
//         if(sum) {
//             resolve(sum);
//         } else {
//             reject("Error : Cannot add")
//         }
//     })
// }

// add().then((data) => {
//             console.log("The sum is " + data)
//         })
//     .catch((err) => {
//             console.log("Error : " + err)
//         })


let promise1 = new Promise((resolve, rejected) => {
    setTimeout(() => {
       resolve("First PRomise")
    },0)
})

let promise2 = new Promise((resolve, rejected) => {
   setTimeout(() => {
      resolve("Second PRomise")
   },4000)
})

let promise3 = new Promise((resolve, rejected) => {
   setTimeout(() => {
       rejected("Third PRomise")
   },1000)
})
// promise.all  - AND condition
// promise.race - OR condition
Promise.race([promise1,promise2, promise3])
      .then((data) => {
           console.log(data)
      })
