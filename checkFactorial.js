function factorial(n) {
    let x = 1;
    for (let c = 1; c <= n; ++c) x *= c;
    return x;
}
console.log(factorial(5));