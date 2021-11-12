function pathFinder(maze) {

    maze = maze.split('\n').map(row => row.split(''));
    let queue = [];
    let dirs = [[-1,0], [0,1], [1, 0], [0,-1]]; //possible edges for each node
    let mazeDistance = maze.slice(); //holds the distance of each node from the start

    function canMoveTo(dir, i) {
        return !(dir[0] < 0 || dir[0] > maze.length-1 || dir[1] < 0 || dir[1] > maze.length-1 || maze[dir[0]][dir[1]] !== '.');
    }
    
    function bfs(start, end, maze) {
        let curPos = start;
        queue.push(curPos);
        mazeDistance[curPos[0]][curPos[1]] = 0;//mark this node as visited and set its distance from the start
      
        while(queue.length > 0) {
            curPos = queue.shift();
            if(curPos[0] === end[0] && curPos[1] === end[1]) { //if the end is found then stop searching and return the distance
                return mazeDistance[curPos[0]][curPos[1]];
                break;
            }
            for(let i = 0; i < dirs.length; i++) {
                let nextDir = [curPos[0] + dirs[i][0], curPos[1] + dirs[i][1]];
                let canIMove = canMoveTo(nextDir, i);
                if(canIMove) {
                    queue.push(nextDir); //queue next nodes to be explored
                    mazeDistance[nextDir[0]][nextDir[1]] = mazeDistance[curPos[0]][curPos[1]] + 1; //store the distance to the next node
                }
            }
        }
        return false;
    }

    return bfs([0,0], [maze.length-1, maze.length-1], maze); 
}

// function getPrettyMaze(maze) {
//     let mazeStr = [];
//     for(let row = 0; row < maze.length; row++) {
//         mazeStr.push(maze[row].join(''));
//     }
//     mazeStr = mazeStr.join('\n');
//     return mazeStr;
// }


console.log(pathFinder(`.W.
.W.
...`));


// let maze = `.W.
// .W.
// ...`;
// maze = maze.split('\n').map(row => row.split(''));
// let temp = [[maze[1][1]]];

// console.log(temp);




// let nextX = 1;
// let nextY = 1;
// let temp = new Set();
// temp.add([1,1].join(','));
// console.log(temp);
// console.log(temp.has(`${nextX},${nextY}`));
// console.log(temp[`${nextX},${nextY}`]);

// let testMap = new Map();
// let unArr = [1,1]
// testMap.set('1,1', ['a']);
// console.log(testMap, testMap.has('1,1'));
// let temp =  testMap.get('1,1');
// temp.push('b');
// // console.log(testMap.get('1,1'));
// console.log(testMap.has('b')); // -> false




/**
 Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false.

Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.


 */