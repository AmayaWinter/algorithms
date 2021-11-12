/**
 *
 * @param a
 * @param b
 *
 * iterate through a, and at each character check to see if it exists in b
 * if it doesn't exist then add the value to a new array, if it doesn't then don't add it
 */
function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
}

//alt solution
// function arrayDiff(a, b) {
//     let diffArr = [];
//     a.forEach(val => {
//         if(!b.includes(val)) {
//             diffArr.push(val);
//         }
//     });
//
//     return diffArr;
// }

console.log(arrayDiff([1,2],[1]) );
console.log(arrayDiff([1,2,2,2,3],[2]));

console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([3,4], [3]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([1,2,3], [1,2]));

/**
 * https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 *
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

 It should remove all values from list a, which are present in list b keeping their order.

 arrayDiff([1,2],[1]) == [2]
 If a value is present in b, all of its occurrences must be removed from the other:

 arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */