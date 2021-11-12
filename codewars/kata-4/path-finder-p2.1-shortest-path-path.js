function pathFinder(maze) {

    maze = maze.split('\n').map(row => row.split(''));
    // console.log(maze);
    let queue = [];
    
    let dirs = [[-1,0], [0,1], [1, 0], [0,-1]]; //possible edges for each node
    let dirNames = ['north', 'east', 'south', 'west']; 
    let numSteps = false;
    let mazeDistance = maze.slice();

    function getPrettyMaze(maze) {
        // console.log('getPrettyMaze');
        let mazeStr = [];
        for(let row = 0; row < maze.length; row++) {
            mazeStr.push(maze[row].join(''));
        }
        mazeStr = mazeStr.join('\n');
        return mazeStr;
    }

    function canMoveTo(dir, i) {

        let isInvalidPos = dir[0] < 0 || dir[0] >= maze.length || dir[1] < 0 || dir[1] >= maze.length || maze[dir[0]][dir[1]] !== '.';// || adjList.has(dir.join(','));
        console.log(`\tCan I move ${dirNames[i]} to ${dir.join(',')} -- ${isInvalidPos ? 'no': '*yes*'}` );
        if(isInvalidPos) {
            return false;
        }
        return true;
    }


    //searches the maze and constructs adjacency list
    function bfs(start, end, maze) {
        let curPos = start;
        queue.push(curPos);
        mazeDistance[curPos[0]][curPos[1]] = 0;//mark this node as visited and set its distane from the start
      
        while(queue.length > 0) {
            curPos = queue.shift();
            if(curPos[0] === end[0] && curPos[1] === end[1]) { //if the end is found
                numSteps = mazeDistance[curPos[0]][curPos[1]];
                break;
            }
 
            console.log('CURPOS: ' + curPos.join(',') + '------');
            for(let i = 0; i < dirs.length; i++) {
                let nextDir = [curPos[0] + dirs[i][0], curPos[1] + dirs[i][1]];
                let canIMove = canMoveTo(nextDir, i);
                if(canIMove) {
                    queue.push(nextDir); //queue then up to be explored
                    mazeDistance[nextDir[0]][nextDir[1]] = mazeDistance[curPos[0]][curPos[1]] + 1;
                }
            }
        }
    }

    bfs([0,0], [maze.length-1, maze.length-1], maze); 
   
    return numSteps;
}