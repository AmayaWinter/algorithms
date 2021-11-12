


function canMove(maze, curPos, dir) {
    let nextX = curPos[0] + dir[0];
    let nextY = curPos[1] + dir[1];
    if(nextX >= 0 && nextX < maze.length && nextY >=0 && nextY < maze.length && maze[nextX][nextY] === '.') {
        // console.log('yes')
        return true;
    }
    else
    {
        // console.log('no');
        return false;
    }
}

function arrayifyMaze(maze) {
    let mazeArr = [];
    maze = maze.split('\n');
    for(let i = 0; i < maze.length; i++) {
        mazeArr[i] = maze[i].split('');
    }
    return mazeArr
}



function pathFinder(maze, curPos = []){
    
    //convert the maze string into an array
    if(!Array.isArray(maze)) {
        maze = arrayifyMaze(maze);
        curPos = [0, 0];
    }

    let dirs = [[-1,0], [0,1], [1, 0], [0,-1]]; //all the possible directions - north, east, south, west
    let pathFound = false; //assume there is no path
    maze[curPos[0]][curPos[1]] = 'x'; //mark the maze noting that we already visited this node

    //have we reached the exit?
    if(curPos[0] === maze.length-1 && curPos[1] === maze.length-1) {
        pathFound = true; 
    }
    else
    {
        //trying going in the available directions, avoiding nodes we've already been to
        for(let i = 0; i < dirs.length; i++) {
            let nextX = curPos[0] + dirs[i][0];
            let nextY = curPos[1] + dirs[i][1];

            if(canMove(maze, curPos, dirs[i])) { 
                if(pathFinder(maze, [nextX, nextY])) { 
                    pathFound = true;
                    break;
                }
            }
        }
    }
    return pathFound;
}

function getPrettyMaze(maze) {
    let mazeStr = [];
    for(let row = 0; row < maze.length; row++) {
        mazeStr.push(maze[row].join(''));
    }
    mazeStr = mazeStr.join('\n');
    return mazeStr;
}



                // console.log('-*-*-*-*-*-*-*-*-');
                // console.log('I can move ' + dirName[i] + '-- ' + canIMove);
                // console.log('curPos', curPos[0], curPos[1]);
                // console.log(getPrettyMaze(maze));
// console.log(pathFinder(`.W.
// .W.
// ...`));

// console.log(pathFinder(`......
// ......
// ......
// ......
// .....W
// ....W.`));


// console.log(pathFinder(`.....W....
// W.WW..W...
// W...WW.W.W
// .......W..
// ..W.......
// .WWWW..WW.
// ....W.W...
// ..W.....W.
// W..WW..WW.
// .....W.W..`));
/*


Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked ..
Walls are marked W.
Start and exit positions are empty in all test cases.
Path Finder Series:
#1: can you reach the exit?
#2: shortest path
#3: the Alpinist
#4: where are you?
#5: there's someone here
 */