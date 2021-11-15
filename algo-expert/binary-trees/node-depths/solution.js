//https://www.algoexpert.io/questions/Node%20Depths
//Input: Binary Tree, with value, left and right
//Output: the sum of the depths for all vertices in the tree
//Approach: visit each node while maintaining the depth and each point and adding to a total depth
//Time: O(n) - visiting all the nodes
//Space: O(h) - height of the tree
function nodeDepths(root) {
  let depth = 0;
  let queue = [root];
  root.depth = 0;
  while(queue.length) {
    let curNode = queue.shift();
    depth += curNode.depth;
    if(curNode.left) {
      curNode.left.depth = curNode.depth + 1;
      queue.push(curNode.left);
    }
    if(curNode.right) {
      curNode.right.depth = curNode.depth + 1;
      queue.push(curNode.right);
    }
  }
  return depth;
}

//Time: O(n) - visiting all the nodes
//Space: O(h) - height of the tree


function nodeDepthsDfs(root, currentDepth = 0) {
  let leftDepth = 0;
  let rightDepth = 0;
  if(root.left) {
    leftDepth = nodeDepthsDfs(root.left, currentDepth + 1);
  }
  if(root.right) {
    rightDepth = nodeDepthsDfs(root.right, currentDepth + 1);
  }
  return currentDepth + leftDepth + rightDepth;
}


// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
