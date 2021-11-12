var lastDigit = function(base, pow){  

    if(pow === '0') {
        return 1;
    }

    let patterns = {
        '0' : [0, 0, 0, 0],
        '1' : [1, 1, 1, 1],
        '2' : [2, 4, 8, 6],
        '3' : [3, 9, 7, 1],
        '4' : [4, 6, 4, 6],
        '5' : [5, 5, 5, 5],
        '6' : [6, 6, 6, 6],
        '7' : [7, 9, 3, 1],
        '8' : [8, 4, 2 ,6],
        '9' : [9, 1, 9, 1],
    }
    
    let baseLastDigit = base.slice(-1)
    let pattern = patterns[baseLastDigit]
    let patternIdx = pow.slice(-2) % 4;
    patternIdx = patternIdx === 0 ? 3 : patternIdx -1

    return Number(pattern[patternIdx]);
}




console.log(lastDigit("9", "7"));



/*
https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 
7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

*/

