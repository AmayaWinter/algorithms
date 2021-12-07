// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Time: O(n + m), Space: O(max(n,m))
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let sum = getLinkedListIntegerVal(linkedListOne) + getLinkedListIntegerVal(linkedListTwo);
  return makeList(sum);
}

function getLinkedListIntegerVal(list) {
  let curNode = list;
  let intVal = 0;
  let tens = 0;
  while(curNode) {
    intVal += Math.pow(10,tens++) * curNode.value;
    curNode = curNode.next;
  }
  return intVal;
}

function makeList(num) {
  let numArr = num.toString().split('');
  let head = new LinkedList(parseInt(numArr[numArr.length-1]));
  let curNode = head;
  for(let i = numArr.length-2; i >= 0; i--) {
    curNode.next = new LinkedList(parseInt(numArr[i]));
    curNode = curNode.next;
  }
  return head;
}


