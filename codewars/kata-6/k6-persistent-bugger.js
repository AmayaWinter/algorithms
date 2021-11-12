/**
 *
 * @param num
 * @returns {number|*}
 *
 *  //goal: return the number of times you have to multiple num to get a single digit
 //approach: recursive
 //  base case: when num is a single digit, return 0 because no multiplication happened
 //  iterate through digits of num, multiplying them if the result is more than a single digit then
 //  call persistence on the total, each call should add 1 to the total number of multiplications and finally return it
 */

function persistence(num) {
    let total = 1;
    if(num / 10 < 1) {
        return 0;
    }
    while(num >= 1) {
        total *= num % 10;
        num = Math.floor(num/10);
    }
    return 1 + persistence(total);
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
console.log(persistence(0));




// function persistence(num) {
//     let total = 1;
//     if(num < 10) {
//         return num;
//     }
//     while(num >= 1) {
//         console.log('num', num);
//         total *= (num % 10);
//         num = Math.floor(num / 10);
//     }
//     console.log('total:' + total);
//     if(total > 9) {
//         total = persistence(total);
//     }
//     return total;
// }


// function persistence(num) {
//     if(num / 10 < 1) { //if num is 1 digit
//         return num;
//     }
//     return persistence(num%10 + persistence(Math.floor(num/10)));
// }


// console.log(persistence(39));
// console.log(persistence(4));
// console.log(persistence(25));
// console.log(persistence(999));

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 */