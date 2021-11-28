
//Time: O(V+E) - for every node we explore all it's edges
//Space: O(n) - visited list will contain n vertices

/*
  Approach:
    - create an adjacency list
    - loop over the vertices run a dfs on each vertex which hasn't been visited to mark it and any nodes connected to it as visited
    - everytime we come across a non-visited node in our loop we know this is the start of a new component
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = function(n, edges) {

  const adjList = {};
  const visited = new Set();
  let numComponents = 0;

  //make an adjacency list
  for(const [node1, node2] of edges) {
    node1 in adjList ? adjList[node1].push(node2) : adjList[node1] = [node2];
    node2 in adjList ? adjList[node2].push(node1) : adjList[node2] = [node1];
  }

  //loop over all the nodes, since we know the nodes are from 0 to n
  for(let i = 0; i <= n;i++) {
    if(!visited.has(i) && i in adjList) {
      //run a dfs on this node which will mark the nodes it's connected to as visited
      dfs(i);
      numComponents++;
    }
  }


  function dfs(i) {
    visited.add(i); //mark this vertex as visited

    //loop over the vertices connected to this vertex
    for(let j = 0; j < adjList[i].length; j++) {
      if(!visited.has(adjList[i][j])) {
        dfs(adjList[i][j]); //if not visited yet, run a dfs on them
      }
    }
  }

  //the reason for this is because unconnected components are not represented in edges, so if ever
  //we have less visited vertices than n, we need to add those vertices as they would be considered a component of 1 vertex
  return n - visited.size === 0 ? numComponents : numComponents + n - visited.size;
};

console.log(countComponents(5, [[0,1],[1,2],[3,4]]); //2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])); //1
console.log(countComponents(4, [[2,3],[1,2],[1,3]])); // 2