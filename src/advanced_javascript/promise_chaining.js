// PROMISE CHAINING
function step1() {
return Promise.resolve("Step 1 completed");
}


function step2() {
return Promise.resolve("Step 2 completed");
}


step1()
.then(result => {
console.log(result);
return step2();
})
.then(result => console.log(result));