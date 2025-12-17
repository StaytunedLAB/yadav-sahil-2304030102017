// 1. Basic Promise + then/catch/finally

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;
      ok ? resolve("Data loaded successfully!") : reject("Data failed");
    }, 800);
  });
}

loadData()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Basic Promise Completed"));


// 2. Promise.resolve()

const instantSuccess = Promise.resolve("Immediate Success");
instantSuccess.then(msg => console.log(msg));


// 3. Promise.reject()

const instantError = Promise.reject("Immediate Error");
instantError.catch(err => console.log(err));


// 4. Promise.all()

const allP1 = Promise.resolve("A");
const allP2 = new Promise(resolve => setTimeout(() => resolve("B"), 500));
const allP3 = Promise.resolve("C");

Promise.all([allP1, allP2, allP3])
  .then(values => console.log("Promise.all:", values))
  .catch(err => console.log("Promise.all Error:", err));



// 5. Promise.allSettled()

const settled1 = Promise.resolve("OK");
const settled2 = Promise.reject("Failed");
const settled3 = Promise.resolve("Done");

Promise.allSettled([settled1, settled2, settled3])
  .then(result => console.log("Promise.allSettled:", result));



// 6. Promise.race()

const fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast response"), 300));
const slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow response"), 1200));

Promise.race([fastPromise, slowPromise])
  .then(winner => console.log("Promise.race winner:", winner));


// 7. Promise.any()

const any1 = Promise.reject("Fail 1");
const any2 = Promise.reject("Fail 2");
const any3 = Promise.resolve("First success!");

Promise.any([any1, any2, any3])
  .then(success => console.log("Promise.any:", success))
  .catch(err => console.log("All failed:", err));



// 8. Async / Await (using a promise)

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncExample() {
  console.log("Async start");
  await wait(500);
  console.log("Async after 0.5 sec");
  return "Async finished";
}

asyncExample().then(msg => console.log(msg));


// 9. Real Use Case: Multiple API calls

function fakeAPI(name, delay) {
  return new Promise(resolve =>
    setTimeout(() => resolve(`${name} complete`), delay)
  );
}

async function dashboardLoader() {
  const results = await Promise.all([
    fakeAPI("User info", 700),
    fakeAPI("Notifications", 1000),
    fakeAPI("Analytics", 1200)
  ]);

  console.log("Dashboard Data:", results);
}

dashboardLoader();
