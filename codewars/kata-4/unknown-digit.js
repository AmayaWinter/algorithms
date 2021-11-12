/**
 * 
 * @param {string} exp 
 */
function solveExpression(exp) {

    let unknownDigit = -1;
    let ops = ['*', '+', '-']

    let opIdx;
    let equalIdx = exp.indexOf('=');
    for(let i = 0; i < ops.length; i++) {
        if(exp.slice(1).indexOf(ops[i]) !== -1) {
            opIdx = exp.slice(1).indexOf(ops[i])+1;
            break;
        }
    }

    let op = exp[opIdx];
    let left = exp.slice(0,opIdx);
    let right = exp.slice(opIdx+1, equalIdx);
    let ans = exp.slice(equalIdx+1);
    let hasLeadingZero = [left,right,ans].some(val =>  val.length > 1 && (val[0] === '?' || (val[0] === '-' && val[1] === '?')) );

    let possibleUnknownDigits = [0,1,2,3,4,5,6,7,8,9].filter(digit => {
        if(hasLeadingZero && digit === 0) {return false;}
        else {return exp.indexOf(digit) === -1;}
    });
    for(let i = 0; i < possibleUnknownDigits.length; i++) {
        let digit = possibleUnknownDigits[i];
        let posLeft = left.replace(/\?/g, digit);
        let posRight = right.replace(/\?/g, digit);
        let posAns = ans.replace(/\?/g, digit);
        let isCorrect = false;
        switch(op) {
            case '*' :
                isCorrect = Number(posLeft) * Number(posRight) === Number(posAns);
            break;
            case '+':
                isCorrect = Number(posLeft) + Number(posRight) === Number(posAns);
            break;
            case '-':
                isCorrect = Number(posLeft) - Number(posRight) === Number(posAns);
            break;
        }
        if(isCorrect) {
            unknownDigit = digit;
            break;
        }
    }
    return unknownDigit;
}


// console.log(solveExpression('1+1=?'));
// console.log(solveExpression('123*45?=5?088'));
// console.log(solveExpression('-5?*-1=5?'));
// console.log(solveExpression('19--45=5?',));
// console.log(solveExpression('??*??=302?'));
// console.log(solveExpression('?*11=??'));
// console.log(solveExpression('??*1=??'));
// console.log(solveExpression('??+??=??'));



    //no numbers start with leading 0 unless the number itself is 0
    //operators are known
    //some digits are known
    //? is the same number throughout the expression, it is never an operator or leading -
    //-1000000 < nums < 1000000


/*To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

The professor will give you a simple math expression, of the form

[number][op][number]=[number]
He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.

*/