/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x === 0) {
        return 0;
    }
    let rev = x < 0 ? ['-'] : [];
    x = Math.abs(x);
    while (x !== 0) 
    {
        rev.push(Math.abs(x%10))
        x = Math.floor(x / 10);
    }
    rev = rev.join('');
    
    return (rev > 2**31-1 || rev < (-2)**31 ? 0 : rev);
};

console.log(reverse(0));


     //method 1
         // let rev = Number(x.toString().split('').reverse().join(''));
