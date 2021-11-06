function isPrimer(n) {
    if (n <= 1)
        return false;
    if(n % 2 == 0 && n > 2)
        return false;
    const s = Math.sqrt(n);
    for (let i = 3; i <= s; i += 2){
        if(n % i === 0) 
            return false;
    }
        return true;
}
console.log(isPrimer(6));
