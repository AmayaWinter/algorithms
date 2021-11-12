class PriorityQueue {

    constructor() {
        /**
         *
         * @type {Node[]}
         */
        this.queue = [];
    }

    /**
     * 
     * @param {Node} node
     */
    enqueue(node) { 
        if(this.isEmpty()) {
            this.queue.push(node);
        }
        else {
            let queued = false;
            //check to see if this node has a shorter distance to the source in this layer, if so, then splice it in
            for(let i = 0; i < this.queue.length; i++) {
                if(node.distance < this.queue[i].distance) {
                    this.queue.splice(i,0,node);
                    queued = true;
                    break;
                }
            }
            //this has the longest distance to the source in this layer, push to the back
            if(!queued) {
                this.queue.push(node);
            }
        }
    }
   
    /**
     * @returns {Node}
     */
    dequeue() {
        return this.queue.shift();
    }
    /**
     * @returns {Boolean}
     */
    isEmpty() {
        return this.queue.length === 0;
    }
}

class Node {

    /**
     * @param {number} altitude 
     * @param {number[]} coordinate
     * @param {number} distance
     */
    constructor(altitude, coordinate, distance) { 
        this.altitude = Number(altitude);
        this.coordinate = coordinate;
        this.distance = distance !== undefined ? distance : Infinity
    }
}

function pathFinder(maze) {

    maze = maze.split('\n').map(row => row.split('')); //turn the maze into a 2d array
    let startPos = [0,0];
    let endPos = [maze.length-1, maze.length-1];
    let visited = new Set();
    let queue = new PriorityQueue(); //determines where we go next
    let dirs = [[-1,0], [0,1], [1, 0], [0,-1]]; //possible directions that can be moved to, n, e, s, w
    let backtrace = new Map();
    let mazeNodes = [];

    //create nodes for each position in the maze
    for(let i = 0; i < maze.length; i++) {
        mazeNodes[i] = [];
        for(let j = 0; j < maze.length; j++) {
            mazeNodes[i][j] = new Node(maze[i][j], [i,j], Infinity);
        }
    }

    let startNode = mazeNodes[startPos[0]][startPos[1]];
    startNode.distance = 0;
    queue.enqueue(startNode);

    //while there are nodes to explore
    while(!queue.isEmpty()) {
        let curNode = queue.dequeue();
        let curPos = curNode.coordinate;
        visited.add(curNode);

        //try going in each one of the 4 directions - n, e, s, w
        for(let i = 0;i < dirs.length; i++) {
            let nextPos = [curPos[0] + dirs[i][0], curPos[1] + dirs[i][1]];
            if(!(nextPos[0] < 0 || nextPos[0] > maze.length-1 || nextPos[1] < 0 || nextPos[1] > maze.length-1)) { //if this position is within the maze bounds
                let nextNode = mazeNodes[nextPos[0]][nextPos[1]]; 
                if(!visited.has(nextNode)) { //if this node hasn't been visited yet
                    let climbs = Math.abs(curNode.altitude - nextNode.altitude); //the number of climbs between the current node and the next
                    let distance = curNode.distance + climbs; //the distance from the source to the current node plus the climbs to the next node
                    if(distance < nextNode.distance) { //if this distance is less than another route, then update, and queue this next node to be explored
                        nextNode.distance = distance;
                        backtrace.set(nextNode, curNode); //not the previous shortest step taken to this node
                        queue.enqueue(nextNode);
                    }
                }
            }
        }
    }
    
    let endNode = mazeNodes[endPos[0]][endPos[1]];
    let path = [endNode];
    let lastStep = endNode;
    while(lastStep !== startNode) { //work backwards starting at the end point and grabbing the previous step until we get back to start
        path.unshift(backtrace.get(lastStep));
        lastStep = backtrace.get(lastStep);
    }
    let endClimbs = mazeNodes[endPos[0]][endPos[1]].distance;
    path.forEach(node => {
        console.log(node.coordinate);
    })
    console.log(`Path is ${path} and time is ${endClimbs}`);
    return  mazeNodes[endPos[0]][endPos[1]].distance;
}

console.log(pathFinder(`010
010
010`));

console.log(pathFinder(`648859746
018192336
584438720
655490890
100808321
830066333
361079309
963226013
764633542`));

// console.log(pathFinder(`777000
// 007000
// 007000
// 007000
// 007000
// 007777`));





/*

You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).

Location altitude is defined as an integer number (0-9).


 */