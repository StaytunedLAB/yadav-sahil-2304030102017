function makeCounter(start = 0) {
  let count = start;             
  return {
    increment() { return ++count; },
    get() { return count; }
  };
}
const c = makeCounter(5);
console.log(c.increment()); 
console.log(c.get());       