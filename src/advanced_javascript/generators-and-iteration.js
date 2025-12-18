//1. BASIC GENERATOR
function* basicGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = basicGenerator();
console.log("Basic Generator:");
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


//2. GENERATOR WITH for...of (ADVANCED ITERATION)

function* fruitGenerator() {
  yield "Apple";
  yield "Banana";
  yield "Mango";
}

console.log("\nGenerator with for...of:");
for (const fruit of fruitGenerator()) {
  console.log(fruit);
}

//3. GENERATOR WITH LOGIC (LAZY EXECUTION)
function* evenNumbers(limit) {
  for (let i = 2; i <= limit; i += 2) {
    yield i;
  }
}

console.log("\nEven Numbers Generator:");
for (const num of evenNumbers(10)) {
  console.log(num);
}

// 4. CUSTOM ITERABLE OBJECT
const range = {
  start: 1,
  end: 5,
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
};

console.log("\nCustom Iterable Object:");
for (const value of range) {
  console.log(value);
}

//5. ASYNC GENERATOR
async function* asyncNumberGenerator() {
  yield 1;
  await delay(500);
  yield 2;
  await delay(500);
  yield 3;
}

//6. for await...of (ASYNC ITERATION)

(async () => {
  console.log("\nAsync Generator with for await...of:");
  for await (const num of asyncNumberGenerator()) {
    console.log(num);
  }
})();

//7. REAL-WORLD ASYNC GENERATOR (API SIMULATION)
async function* fakeApiUsers() {
  const users = ["User-A", "User-B", "User-C"];

  for (const user of users) {
    await delay(400);
    yield user;
  }
}

(async () => {
  console.log("\nAsync API Simulation:");
  for await (const user of fakeApiUsers()) {
    console.log("Received:", user);
  }
})();


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
