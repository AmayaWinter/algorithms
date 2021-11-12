/*
Inputs: binary search tree, and target integer value
Task: return the node with the closest value to the integer value
Guarantees:
  1. There will be only one closest value
  2. Each node has a value, left, and right

Edge case: initial tree is empty

Approach:
  1.  Initialize a closestNum variable to Infinity
  2.  Traverse tree
  3.  Since this is guaranteed to be a BST, if the target num is greater than or
      equal to than the current node, then go right, otherwise left.
  4.  At each node compare the difference between the target and the current node to see if it is
      smaller than the previously found closest node, if so, replace the closetsNum variable
*/


function findClosestValueInBst(tree, target) {
  let closestNum = Infinity;
  let curNode = tree;
  while(curNode !== null) {
    let diff = Math.abs(curNode.value - target);
    if(diff < Math.abs(target - closestNum)) {
      closestNum = curNode.value;
    }
    if(target < curNode.value) {
      curNode = curNode.left;
    }
    else {
      curNode = curNode.right;
    }
  }
  return closestNum;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
