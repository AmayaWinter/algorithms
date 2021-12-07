/*
Input: ascending sorted it array
Output: ascending sorted array of corresponding squares
Time: O(n) - need to visit every value in array
Space: O(n) - size of the new array
 */
function sortedSquaredArray(array) {
  let squares = [];
  let leftIdx = 0;
  let rightIdx = array.length-1;
  for (let i = array.length - 1; i >= 0; i--) {
    let leftVal = Math.abs(array[leftIdx]);
    let rightVal = Math.abs(array[rightIdx]);
    if(leftVal > rightVal) {
      squares[i] = leftVal * leftVal;
      leftIdx++;
    }
    else {
      squares[i] = rightVal * rightVal;
      rightIdx--;
    }
  }
  return squares;
}




console.log(sortedSquaredArray([-3,-2,-1,0,1,2,3]));

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
