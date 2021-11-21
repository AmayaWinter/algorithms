function spiralTraverse(arr) {
  let spiral = [];
  let cols = arr[0].length;
  let rows = arr.length;
  let numItems = cols * rows;

  let curRow = 0;
  let curCol = 0;

  let rowsStart = 0;
  let rowsEnd = arr.length - 1;
  let colsStart = 0;
  let colsEnd = arr[0].length - 1;

debugger;
  while(numItems) {
    curRow = rowsStart;
    for(curCol = colsStart; curCol <= colsEnd; curCol++) {
      numItems--
      spiral.push(arr[curRow][curCol]);
      if(numItems === 0) { return spiral}
    }
    rowsStart++;

    curCol = colsEnd;
    for(curRow = rowsStart;curRow <= rowsEnd; curRow++) {
      numItems--;
      spiral.push(arr[curRow][curCol]);
      if(numItems === 0) { return spiral}
    }
    colsEnd--;

    curRow = rowsEnd;
    for(curCol = colsEnd; curCol >= colsStart; curCol--) {
      numItems--;
      spiral.push(arr[curRow][curCol]);
      if(numItems === 0) { return spiral}

    }
    rowsEnd--;

    curCol = colsStart;
    for(curRow = rowsEnd;curRow >= rowsStart; curRow--) {
      numItems--;
      spiral.push(arr[curRow][curCol]);
      if(numItems === 0) { return spiral}
    }
    colsStart++;
    console.log(numItems);
  }
  return spiral;
}


// console.log(spiralTraverse([
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]));

console.log(spiralTraverse([
  [1],
]));




