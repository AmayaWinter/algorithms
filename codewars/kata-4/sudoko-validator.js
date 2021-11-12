function validSolution(board) {

    let isValidSolution = true;
    for(let i = 0; i < 9; i+=3) {
        for(let j = 0; j < 9; j+=3)
        {
            let threeSubGrid = board[i].slice(j, j+3).concat(board[i+1].slice(j, j+3)).concat(board[i+2].slice(j, j+3));
            for(let x = 1; x <= 9; x++) {
                isValidSolution = isValidSolution && threeSubGrid.includes(x);
            }
            if(!isValidSolution) {
                break;
            }
        }
        if(!isValidSolution) {
            break;
        }
    }
    return isValidSolution;
}

// function isValidSubGrid(subGrid) {
  
//     let reqValues = [];
//     let isValidSubGrid = true;
//     subGrid = subGrid.flat(2);
//     console.log(subGrid);
//     // for(let i = 0; i < 3; i++) {
//     //     for(let j = 0; j < 3; j++ ) {
//     //         let num = subGrid[i][j];
//     //         if(!reqValues.includes(num)) {
//     //             reqValues.push(num);
//     //         }
//     //         else if(reqValues.includes(num) || num === 0)
//     //         {
//     //             isValidSubGrid = false;
//     //             break;
//     //         }
//     //     }
//     //     if(!isValidSubGrid) {
//     //         break;
//     //     }
//     // }
//     return isValidSubGrid;
// }

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]));



console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]));

