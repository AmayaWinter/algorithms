/**
 *
 * @param words
 * split the words into an array
 * iterate over the words
 * get the number from the word using regex
 * assign the number to a map with the word as the value
 *
 * then i'll loop X times (where x is the number of words) and create the ordered sentence
 *
 */
function order(words) {

    let wordTokens = words.split(' ');
    let map = new Map();
    let order = [];
    wordTokens.forEach(token => {
        map.set(Number(token.match(/[0-9]{1}/)), token);
    });

    for(let i = 1; i <= wordTokens.length; i++) {
        order.push(map.get(i));
    }
    return order.join(' ');
}


console.log(order("is2 Thi1s T4est 3a"), order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), order("") === "" );

/**
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

 Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

 If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

 Examples
 "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 ""  -->  ""
 */