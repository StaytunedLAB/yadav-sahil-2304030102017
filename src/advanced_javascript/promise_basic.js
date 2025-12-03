// BASIC PROMISE
let p = new Promise((resolve, reject) => {
setTimeout(() => resolve("Data received"), 1000);
});


p.then(result => console.log(result));