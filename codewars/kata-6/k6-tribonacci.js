/**
 *
 * @param signature
 * @param n
 */
function tribonacci(seq,n){
    if(n === 0) {
        return [];
    }
    else if(n < 3)
    {
        return seq.slice(0,n);
    }
    for(let i = 0; i < n-3; i++) {
        let idx = seq.length-1;
        seq.push(seq[idx] + seq[idx-1] + seq[idx-2]);
    }
    return seq;
}

//fib recursive
function fib(n) {
    let seq = [];
    if(n === 2) {
       return [0,1]
    }
    seq = fib(n-1);
    seq.push(seq[seq.length-1] + seq[seq.length-2]);
    return seq;
}

//trib recursive
function tribonacci(sig, n) {
    function calculate(n) {
        let seq = [];
        if(n < 3) {
            return sig.slice(0,n);
        }
        if(n === 3) {
            return sig;
        }
        seq = calculate(n-1);
        seq.push(seq[seq.length-1] + seq[seq.length-2] + seq[seq.length-3]);
        return seq;
    }
    return calculate(n);
}

console.log(trib([1,1,1], 1));
// console.log(tribonacci([1,1,1],10));
// console.log(tribonacci([0,0,1],10));
// console.log(tribonacci([0,1,1],10));
// console.log(tribonacci([1,0,0],10));
// console.log(tribonacci([0,0,0],10));
// console.log(tribonacci([1,2,3],10));
// console.log(tribonacci([3,2,1],10));

/**
 * https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
 */