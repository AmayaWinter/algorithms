/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  // your code goes here
  //currentMax
  //if the num < curNode go left
  //else go right
  //return -1 if not found
  let currentMax = -1;

  function dfs(node) {
    if(node === null) { return;}
    if(node.key < num && node.key > currentMax) {
      currentMax = node.key;
    }
    if(num > node.key) {
      dfs(node.right);
    }
    else {
      dfs(node.left);
    }
  }

  dfs(this.root);

  return currentMax;
}

/*
Optimal Solution: The key here is to realize that nothing on the left can be closer to this number
because everything on the left is smaller than the key you're on now
function findLargestSmallerKey(rootNode, num):
    result = -1

    while (rootNode != null):
        if (rootNode.key < num):
            result = rootNode.key
            rootNode = rootNode.right
        else:
            rootNode = rootNode.left

    return result
*/

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
    if(key < currentNode.key) {
      if(!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);
