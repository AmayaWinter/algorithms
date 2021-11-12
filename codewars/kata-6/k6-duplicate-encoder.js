/**
 *
 * @param word
 * approach:
 *  make an object that holds each character as a key, and how many times it appears as it's value
 *  iterate through the word look up the number of times that letter appeared and then add the apppriate symbol to the encoded string
 */
function duplicateEncode(word){
    let encodedString = '';
    let charFrequency = {};
    let tokenizedWords = word.toLowerCase().split('');

    tokenizedWords.forEach(char => {
        charFrequency[char] = charFrequency[char] ? charFrequency[char]+1 : 1;
    })
    encodedString = tokenizedWords.map(char => charFrequency[char] === 1 ? '(' : ')');
    return encodedString.join('');
}

// console.log(duplicateEncode("din"),"(((");
// console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
// console.log(duplicateEncode("(( @"),"))((");

