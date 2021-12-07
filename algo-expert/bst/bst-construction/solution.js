// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let curNode = this;
    while(true) {
      if(value >= curNode.value) {
        if(!curNode.right) {
          curNode.right = new BST(value, this);
          break;
        }
        else curNode = curNode.right
      }
      else {
        if(!curNode.left) {
          curNode.left = new BST(value, this);
          break;
        }
        else curNode = curNode.left;
      }
    }

    return this;
  }

  contains(value) {
    let result = this.getNode(value)
    console.log('contains', value, !!result, result);
    return !!result
  }

  getNode(value) {
    let curNode = this;
    while(curNode) {
      if(value === curNode.value) return curNode;
      if(value >= curNode.value) {
        curNode = curNode.right
      }
      else {
        curNode = curNode.left;
      }
    }
    return false;
  }


  findSmallest() {
    let curNode = this;
    while(curNode.left) {
      curNode = curNode.left;
    }
    return curNode.value;
  }


  remove(value, parentNode = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let parentOfNodeToRemove = null;
    let curNode = this;
    while(curNode) {
      if(value >= curNode.value) {
        parentNode = curNode;
        curNode = curNode.right;
      }
      else if(value < curNode.value) {
        parentNode = curNode;
        curNode = curNode.left;
      }
      else {
        if(curNode.left && curNode.right) {//the node to remove has a left and a right
          curNode.value = curNode.right.findSmallest();
          curNode.right.remove(curNode.value, curNode); //the current value
        }
        else if(parentNode === null) { //we're trying to remove the root, and it either has a left node or right node
          if(curNode.left) {
            curNode.value = curNode.left.value;
            curNode.right = curNode.left.right;
            curNode.left = curNode.left.left;
          }
          else if(curNode.right) {
            curNode.value = curNode.right.value;
            curNode.left = curNode.right.left;
            curNode.right = curNode.right.right;
          }
          else {

          }
        }
        else if(parentNode.left === curNode) {//we know at this point that the curNode has either no children, or one child
          parentNode.left = curNode.left ? curNode.left : curNode.right
        }
        else if(parentNode.right === curNode) {//we know at this point that the curNode has either no children, or one child
          parentNode.right = curNode.left ? curNode.left : curNode.right
        }
        break;
      }
    }

    return this;
  }
}


let bst = new BST(10);
bst.insert(5)
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);
bst.insert(14)
bst.insert(12);
bst = bst.remove(10);
console.log(bst);
debugger;

//when inserting less than or equal to goes on the left
//add a parent property to make removing easier
//when moving the node remember to set it's parent as the node above what's being removed
//what's true about root? no parent, no children, in which case do nothing

// Do not edit the line below.
exports.BST = BST;



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}



/*
 * Complete the 'compressWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING word
 *  2. INTEGER k
 */

function compressWord(word, k) {
  // Write your code here
  let letters = [];
  let letterIdx = 0;
  for(let i = 0; i < word.length; i++) {
    let letter = letters[i];
    letters[lettersIdx] = [letter];
    for(let j = 1; j < word.length;j++) {
      if(letter === letters[j]) {
        letters[lettersIdx].push(letter);
      }
      else {
        letterIdx++;
        break;
      }
    }
  }
  console.log(letters);
}

function main() {
