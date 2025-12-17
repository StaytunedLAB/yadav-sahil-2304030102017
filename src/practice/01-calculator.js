function simpleInterest(P, R, T) {
    return (P * R * T) / 100;
}

function compoundInterest(P, R, T) {
    let A = P * Math.pow((1 + R / 100), T);
    return A - P;
}

let P = 5000;
let R = 7;
let T = 3;

console.log("Simple Interest:", simpleInterest(P, R, T));
console.log("Compound Interest:", compoundInterest(P, R, T).toFixed(2));
