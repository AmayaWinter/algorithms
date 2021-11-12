//https://www.algoexpert.io/questions/Depth-first%20Search
/*
Input:
  acyclic tree like structure of Nodes
  Nodes have `name` and `children` properties
Output: array of elements top to bottom, left to right
Approach: use DFS pre-order to add elements to an array as tree is travered
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  // recursive DFS
  // Time: O(V + E) must visit each node, must loop over all edges
  // Space: O(2V) -> O(V) - we're storing an array of the values, and potentially putting V calls on the all stack
  // depthFirstSearch(array) {
  //   function dfs(node) {
  //     if(!node) return;
  //     array.push(node.name); //add this to the array
  //     node.children.forEach(childNode => dfs(childNode)); //explore the children, starting with the first and going deep
  //   }
  //   dfs(this);
  //   return array;
  // }

  //using a stack instead of the call stack
  //Time: O(V+E)
  //Space: O(2V) => O(V) - have an array for our stack and for the values
  depthFirstSearch(array) {
    const stack = [this];
    while (stack.length) {
      const curNode = stack.shift();
      array.push(curNode.name);
      stack.unshift(...curNode.children);
    }
    return array;
  }

}

// Do not edit the line below.
exports.Node = Node;
