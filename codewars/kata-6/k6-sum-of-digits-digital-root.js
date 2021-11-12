function digital_root(n) {
    let total = 0;
    if(n < 10) {
        return n;
    }
    while(n >= 1) {
        total += n % 10;  //get the last digit of n
        n = Math.floor(n / 10); //remove the last digit for next iteration
    }
    return digital_root(total);
}

console.log(digital_root(0));
console.log(digital_root(5));
console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));