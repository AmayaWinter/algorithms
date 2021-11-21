function spiralTraverse(arr) {
  let spiral = [];
  debugger;

  let dirs = [
    [1, 0], //right
    [0, 1], //down
    [-1, 0], //left
    [0, -1], //up
  ]

  function dfs(col, row, dirIdx) {
    spiral.push(arr[row][col]);
    arr[row][col] = 'v';
    let nextCol = col + dirs[dirIdx][0];
    let nextRow = row + dirs[dirIdx][1];

    if(canIMove(arr, nextCol, nextRow)) {
      dfs(nextCol, nextRow, dirIdx);
    }
      for (let i = dirIdx; i < 3; i++) {
        nextCol = col + dirs[i][0];
        nextRow = row + dirs[i][1];
        if (canIMove(arr, nextCol, nextRow)) {
          dfs(nextCol, nextRow, i);
        }
      }

  }
  dfs(0,0, 0);
  return spiral;
}

function canIMove(arr, col, row) {
  let cols = arr[0].length;
  let rows = arr.length;
  return (
    col < cols && col >= 0 &&
    row < rows && row >= 0 &&
    arr[row][col] !== 'v'
  );
}
// Do not edit the line below.

function goLeft(spiral,arr, col, row) {
  let cols = arr[0].length;
  let rows = arr.length;
  for(let i = col; i < cols; i++) {
    if(arr[row][col] !== 'v') {
      spiral.push(arr[row][col]);
      arr[row][col] = 'v';
    }
  }
}

function goDown(spiral, arr, col, row) {

}

console.log(spiralTraverse([
  [1,2,3],
  [8,9,4],
  [7,6,5]
]));

// let temp = [];
// let grid = [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]
// goLeft(temp, grid, 0, 0);
// console.log(temp);

exports.spiralTraverse = spiralTraverse;
