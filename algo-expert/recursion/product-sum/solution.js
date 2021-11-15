/*
  Input: a "special" non empty array which contains integers or other "special" arrays
  Task: calculate the product sum of each special array, where the product sum is the depth multiplied
        by the elements in that array
  Example:
    [1,2,[3,4,[5,6]]]
    1 + 2 + 2 * (3 + 4 + 3 * ( 5 + 6 )) =
    1 + 2 +
            2(3) + 2(4) + 2 * (3 * (5 + 6))
    1 + 2 + 6 +  8   + 2 * (33)
    1 + 2 + 6 + 8 + 66 = 83

 */

function productSum(array, depth = 1) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    if(!Array.isArray(array[i])) {
      sum += array[i] * depth;
    }
    else {
      sum += productSum(array[i], depth + 1) * depth;
    }
  }
  return sum;
}

function productSumReduce(array, depth = 1) {
  return array.reduce((sum, num) => sum + (depth * (!Array.isArray(num) ? num : productSumReduce(num, depth + 1))), 0);
}

module.exports = {
  productSum,
  productSumReduce,
}
