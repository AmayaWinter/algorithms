/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

const WALL = -1
const EMPTY = (2 ** 31) -1;
const GATE = 0;
/*
https://leetcode.com/problems/walls-and-gates/solution/
Approach, we're trying to find the shortest path between two points in an unweighted graph, this points
to using a BFS, the key is to realize that you'll have an easier time if you travers from each gate through the graph
than to try and traverse from each point to a gate
 */

//Time: O(mn) we must traverse the entire graph to find the gates, and we visit potentially every
//node in the traversal
function wallsAndGates(rooms) {
  const queue = [];
  let rowSize = rooms.length;
  let colSize = rooms[0].length;
  for(let row = 0; row < rowSize; row++) {
    for(let col = 0; col < colSize; col++) {
      if(rooms[row][col] === GATE) {
        queue.push([row, col]);
      }
    }
  }
  //the possible directions we can move in
  let dirs = [
    [-1, 0], //north
    [1 , 0], //south
    [0 ,-1], //west
    [0 , 1]  //east
  ]

  while(queue.length) {
    const currentRoom = queue.shift();
    for(const dirCoords of dirs) {
      const nextRow = currentRoom[0] + dirCoords[0];
      const nextCol = currentRoom[1] + dirCoords[1];
      if(canMoveTo(rooms, nextRow, nextCol, rowSize, colSize)) {
        rooms[nextRow][nextCol] = rooms[currentRoom[0]][currentRoom[1]] + 1; //mark the distance at this room
        queue.push([nextRow, nextCol]);
      }
    }
  }
};

//helper function to determine if a room can be moved to
function canMoveTo(rooms, nextRow, nextCol, rowSize, colSize) {
  return !(nextRow < 0 || nextRow >= rowSize ||
    nextCol < 0 || nextCol >= colSize ||
    rooms[nextRow][nextCol] === WALL || rooms[nextRow][nextCol] === GATE ||
    rooms[nextRow][nextCol] !== EMPTY)
}