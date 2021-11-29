
/*
- How can we identify that this is a DP problem?
  - "largest square" maximum something
  - problem can be broken down into smaller overlapping sub-problems,

- What is the recurrence relationship
  - if the sizeMatrix we're constructing has a number greater than 0 in each of the positions up,
  left and diagonally from this square then we know a square can be constructed here, however if
  the values are not all the same then it will be a rectangle, so we'll need to take the smallest
  number and add 1 to it
  - `sizeMatrix[row][col] = Math.min(sizeMatrix[row-1][col], sizeMatrix[row][col-1], sizeMatrix[row-1][col-1]) + 1`

    let input = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
    ]

    let sizeMatrix = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 1, 0, 1, 0, 0 ],
      [ 0, 1, 0, 1, 1, 1 ],
      [ 0, 1, 1, 1, 2*, 2 ],
      [ 0, 1, 0, 0, 1, 0 ]
    ]

    //lets assume we're at position [4,5] in the size matrix and haven't yet calculated that value
    //in the input given [4,5] is 1, so we can try to construct a square here

    //to the left is a square of size 2, above and diagonal are squares of size 1
    //size a square must have equal sides the largest square we can generate here
    //is the minimum of the squares around it + 1

    //this defines the recurrence relationship of
    //sizeMatrix[row][col] = Math.min(sizeMatrix[row-1][col], sizeMatrix[row][col-1], sizeMatrix[row-1][col-1]) + 1
    //assuming that matrix[row-1][col-1] === 1

*/
//11/27/21
//Time: O(m*n)
//Space: O(m*n) - we can get a bit better by saving the previous row and the last item to the left
//since that's all that would be needed to calculate the next value
const maximalSquare = function(matrix) {
  let maxSquare = 0;

  let sizeMatrix = [];
  for(let i = 0; i <= matrix.length; i++) {
    sizeMatrix[i] = Array(matrix[0].length+1).fill(0);
  }

  for(let row = 1; row <= matrix.length; row++) {
    for(let col = 1; col <= matrix[0].length; col++) {
      let current = matrix[row-1][col-1];
      let up = sizeMatrix[row-1][col];
      let left = sizeMatrix[row][col-1];
      let diag = sizeMatrix[row-1][col-1];

      if(current === "1") {
        sizeMatrix[row][col] = Math.min(up, left, diag) + 1
      }
      maxSquare = sizeMatrix[row][col] > maxSquare ? sizeMatrix[row][col] : maxSquare;
    }
  }
  return maxSquare * maxSquare;
}