/**
 *
 * @param n
 *
 *  convert the number into binary
 *  iterate through each digit and take note of how many 1's were encountered
 */
var countBits = function(n) {
    return n.toString(2).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

console.log(countBits(1234));


/*
https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */