// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(node, k, pos) {
  debugger;
  let kPos = -1;
  let len = 0;
  function remove(node) {
    if(!node) {
      len--;
      return null;
    }
    len++;
    let lastNode = remove(node.next);
    kPos++;
    if(kPos === k) {
      if(kPos === len) {
        node.value = node.next.value;
        node.next = node.next.next;
      }
      else {
        node.next = lastNode.next;
      }
    }
    return node;
  }
  remove(node);
}

let list = new LinkedList(1);
list.next = new LinkedList(2);
list.next.next = new LinkedList(3);
list.next.next.next = new LinkedList(4);
list.next.next.next.next = new LinkedList(5);

removeKthNodeFromEnd(list, 5);
console.log(list);
debugger;

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
