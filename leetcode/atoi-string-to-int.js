/**
 * @param {string} str
 * @return {number}
 */
 let myAtoi = function(str) {
    
    let num = str.match(/^[\s]*((-|\+)?[0-9]+)/);
    if(num !== null) {
        isNeg = num[2] === '-' ? true : false; //is this negative?
        num = num[1].replace(/^[+-]?([0]*)/,''); //get rid of leading 0's and sign
        let max = isNeg ? '2147483648' : '2147483647'
        
        if(num.length > 10) {
            num = max;
        }
        else if(num.length === 10) {
            num =   (Math.floor(num/10) === Math.floor(max/10) && num%10 <= max%10) ||
                    (Math.floor(num/10) < Math.floor(max/10)) 
                    ? num : max;
        }
        num = isNeg ? num * -1 : num;
    }
    return num !== null ? Number(num) : 0;
};


// console.log(digit, (isNeg ? MIN_INT_STR[idx] : MAX_INT_STR[idx]), digit <= (isNeg ? MIN_INT_STR[idx] : MAX_INT_STR[idx]));
        // console.log(isNeg, num);



console.log(myAtoi("42") === 42);
console.log(myAtoi("   -42") === -42);
console.log(myAtoi("4193 with words") === 4193);
console.log(myAtoi("words and 987") === 0);
console.log(myAtoi("-91283472332"), myAtoi("-91283472332") === -2147483648);
console.log(myAtoi("-1") === -1);
console.log(myAtoi("+1") === 1);
console.log(myAtoi('  -00000000000123456708') === -123456708);
console.log(myAtoi('  00000000000123456708') === 123456708);
console.log(myAtoi('  +00000000000123456708') === 123456708);
console.log(myAtoi("-2147483647") , myAtoi("-2147483647") === -2147483647);
console.log(myAtoi('1147483647') === 1147483647);
console.log(myAtoi("1095502006p8"), myAtoi("1095502006p8") === 1095502006);
console.log(myAtoi(" 1192820738r2"), myAtoi(" 1192820738r2") ===  1192820738);










/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/