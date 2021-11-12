//https://www.algoexpert.io/questions/Branch%20Sums

/**
 * Input: binary tree
 * Output: the sums of each path down the tree returned in an array
 * Approach:
 *  Recursively traverse the tree using a DFS to explore each path while passing in the current running
 *  sum down that path.
 *
 * Edge case: the initial tree is null
 * Base case: if the node is a leaf then push that value onto a sums array
 * Guarantees: each node has a value, left and right
 */

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  function dfs(node, currentSum) {
    if(!node) { return;}
    if(isLeaf(node)) {
      sums.push(currentSum + node.value)
    }
    dfs(node.left, currentSum + node.value);
    dfs(node.right, currentSum + node.value)
  }
  dfs(root, 0);
  return sums;
}

function isLeaf(node) {
  return !node.left && !node.right; //!(node.left || node.right)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
