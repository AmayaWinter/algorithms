function hasSingleCycle(arr) {
  let visited = [true];
  let adjList = makeAdjList(arr);
  console.log(adjList);
  debugger;
  let start = 0;
  console.log(adjList);
  function dfs(node) {
    if(visited[node]) {
      if(visited.length === arr.length && node === start) return true;
      return false;
    }
    visited[node] = true;
    return dfs(adjList[node])
  }
  return dfs(adjList[0]);
}

function makeAdjList(arr) {
  let adjList = [];
  for(let i = 0;i < arr.length; i++) {
    let nextNodeIdx = i + arr[i];
    if(nextNodeIdx < 0 ) {
      nextNodeIdx = arr.length + (nextNodeIdx % arr.length);
    }
    else if(nextNodeIdx > arr.length - 1) {
      nextNodeIdx = (nextNodeIdx % arr.length);
    }
    adjList[i] = nextNodeIdx;
  }
  return adjList;
}


// console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));

// console.log(hasSingleCycle([1, 1, 1, 1, 2]));
console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]));
