function fibonacciRec(n) {
    if (n <= 1) return n;
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}



for (let i = 0; i < 10; i++) {
    console.log(fibonacciRec(i));
}
