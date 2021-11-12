//https://www.algoexpert.io/questions/Remove%20Duplicates%20From%20Linked%20List
/*
Input: head of singly linked list, list is sorted
Task:
  Write function that removes all duplicates

Constraints:
  can't mutate
 */



// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function removeDuplicatesFromLinkedList(linkedList) {
//   // Write your code here.
//   let curNode = linkedList.next;
//   let trailingNode = linkedList;
//   let seen = new Set();
//   linkedList.next = null;
//   seen.add(linkedList.value);
//   while(curNode) {
//     if(!seen.has(curNode.value)) {
//       seen.add(curNode.value);
//       trailingNode.next = curNode;
//       trailingNode = curNode;
//       curNode = curNode.next;
//       trailingNode.next = null;
//     }
//     else {
//       curNode = curNode.next;
//     }
//   }
//   return linkedList
// }

// function removeDuplicatesFromLinkedList(linkedList) {
//   let unique = [];
//   let seen = new Set();
//   if(!linkedList) { return null}
//   let curNode = linkedList;
//   while(curNode) {
//     if(!seen.has(curNode.value)) {
//       unique.push(curNode);
//       seen.add(curNode.value);
//     }
//     curNode = curNode.next;
//   }
//   for(let i = 0; i < unique.length;i++) {
//     unique[i].next = unique[i+1] ? unique[i+1] : null;
//   }
//   return linkedList;
// }

function removeDuplicatesFromLinkedList(linkedList) {
  let lastUniqueNode = linkedList;
  let curNode = linkedList.next;
  while(curNode) {
    if(curNode.value !== lastUniqueNode.value) {
      lastUniqueNode.next = curNode;
      lastUniqueNode = curNode;
    }
    curNode = curNode.next;
    lastUniqueNode.next = null;
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
