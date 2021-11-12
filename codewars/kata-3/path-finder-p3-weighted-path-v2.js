/**
 * this solution differs from the original in that a graph object is built (nodes, adjlist)
 * this is slower and more computationally expensive than the previous solution
 */

class PriorityQueue {

    constructor() {
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
            let added = false;
            for(let i = 0; i < this.queue.length; i++) {
                if(node.distance < this.queue[i].distance) {
                    this.queue.splice(i,0,node);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.queue.push(node);
            }
        }
    }
   
    /**
     * 
     * @returns {Node}
     */
    dequeue() {
        return this.queue.shift();
    }
    /**
     * 
     * @returns {Boolean}
     */
    isEmpty() {
        return this.queue.length === 0;
    }
}


class Node {
    /**
     * 
     * @param {number} altitude 
     * @param {number[]} coordinate 
     * @param {number} distance
     */
    constructor(altitude, coordinate, distance) { 
        this.altitude = Number(altitude);
        this.coordinate = coordinate;
        this.distance = distance !== undefined ? distance : Infinity;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = new Map();
    }
    addNode(node) {
        this.nodes.push(node);
        this.adjList.set(node, []);
    }
    addEdge(node1, node2) {
        let list = this.adjList.get(node1);
        list.push(node2);
        this.adjList.set(node1, list);

        let list2 = this.adjList.get(node2);
        list2.push(node1);
        this.adjList.set(node2, list2);
    }
    getAdjList(node) {
        return this.adjList.get(node);
    }
}


function canMoveTo(dir, n, i) {
    let dirNames = ['north', 'east', 'south', 'west']; 
    let isInvalidPos = dir[0] < 0 || dir[0] > n-1 || dir[1] < 0 || dir[1] > n-1;
    // console.log(`\tCan I move ${dirNames[i]} to ${dir.join(',')} -- ${isInvalidPos ? 'no': '*yes*'}` );
    if(!isInvalidPos) {
        return true;
    }
    return false;
}


function buildGraph(maze, startPos) {
    let queue = [];
    let graph = new Graph();
    let visited = new Set();
    let dirs = [[-1,0], [0,1], [1, 0], [0,-1]]; //possible directions that can be moved to, n, e, s, w
    let startNode = maze[startPos[0]][startPos[1]];
    queue.push(startNode);
    graph.addNode(startNode);

    while(queue.length > 0) {
        let curNode = queue.shift();
        let curPos = curNode.coordinate;
        visited.add(curNode);
        for(let i = 0;i < dirs.length; i++) {
            let nextPos = [curPos[0] + dirs[i][0], curPos[1] + dirs[i][1]];
            if(canMoveTo(nextPos, maze.length, i)) {
                let nextNode = maze[nextPos[0]][nextPos[1]];
                if(!visited.has(nextNode)) {
                    graph.addNode(nextNode);
                    graph.addEdge(curNode, nextNode);
                    queue.push(nextNode);
                }
            }
        }
    }
    return graph;
}

function pathFinder(maze) {

    maze = maze.split('\n').map(row => row.split('')); //turn the maze into a 2d array
    let startPos = [0,0];
    let endPos = [maze.length-1, maze.length-1];
    let n = maze.length;
    let visited = new Set();
    let queue = new PriorityQueue(); //determines where we go next
    let mazeNodes = [];


    for(let i = 0; i < maze.length; i++) { //create a node for each position in the maze
        mazeNodes[i] = [];
        for(let j = 0; j < maze.length; j++) {
            let node = new Node(maze[i][j], [i,j], Infinity);
            mazeNodes[i][j] = node;
        }
    }
    let graph = buildGraph(mazeNodes, startPos);

    let startNode = mazeNodes[startPos[0]][startPos[1]];
    startNode.distance = 0;
    queue.enqueue(startNode);

    while(!queue.isEmpty()) {
        let curNode = queue.dequeue();
        let curPos = curNode.coordinate;
        visited.add(curNode);

        graph.getAdjList(curNode).forEach(neighbor => {
            if(!visited.has(neighbor)) {
                let climbs = Math.abs(curNode.altitude - neighbor.altitude);
                let distance = curNode.distance + climbs;
                if(distance < neighbor.distance) {
                    neighbor.distance = distance;
                    queue.enqueue(neighbor);
                }
            }
        });
    }
  
    return mazeNodes[endPos[0]][endPos[1]].distance;
}

console.log(pathFinder(`648859746
018192336
584438720
655490890
100808321
830066333
361079309
963226013
764633542`));

// console.log(pathFinder(`010
// 010
// 010`))