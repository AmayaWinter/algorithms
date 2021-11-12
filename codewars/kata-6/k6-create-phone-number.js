/**
 *
 * @param {number[]} numbers
 *
 *
 */
function createPhoneNumber(numbers) {
    // let matches = numbers.join('').toString().match(/([0-9]{3})([0-9]{3})([0-9]{4})/);
    // return `(${matches[1]}) ${matches[2]}-${matches[3]}`;

    return numbers.join('').toString().replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, '($1) $2-$3');

    //return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

 Example:
 createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 The returned format must be correct in order to complete this challenge.
 Don't forget the space after the closing parentheses!
 */