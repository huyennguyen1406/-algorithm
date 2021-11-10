function factorial(n) {
    let x = 1;
    for (let i = 1; i <= n; i++) x *= i;
    return x;
}
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));