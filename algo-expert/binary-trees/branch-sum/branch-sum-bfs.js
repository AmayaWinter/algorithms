//https://www.algoexpert.io/questions/Branch%20Sums

/**
 * Input: binary tree
 * Output: the sums of each path down the tree returned in an array
 * Approach:
 *  Traverse the tree using a BFS to explore each level while storing the current sum on each node,
 *  if the node is a leaf then save that sum onto a sums array
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
  function bfs(node) {
    if(!node) { return; }
    node.sum = node.value;
    const queue = [node];
    while(queue.length) {
      let curNode = queue.shift();
      if(isLeaf(curNode)) {
        sums.push(curNode.sum);
      }
      if(curNode.left) {
        curNode.left.sum = curNode.sum + curNode.left.value;
        queue.push(curNode.left);
      }
      if(curNode.right) {
        curNode.right.sum = curNode.sum + curNode.right.value;
        queue.push(curNode.right);
      }
    }
  }
  bfs(root);
  return sums;
}

function isLeaf(node) {
  return !node.left && !node.right; //!(node.left || node.right)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
