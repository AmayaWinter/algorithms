// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Time: O(n + m), Space: O(max(n,m))
function sumOfLinkedLists(listOne, listTwo) {
  let sum = 0;
  let tens = 0;
  let curListOne = listOne;
  let curListTwo = listTwo;
  while(curListOne && curListTwo) {
    sum += curListOne.value * Math.pow(10, tens) + curListTwo.value * Math.pow(10, tens);
    tens++;
    curListOne = curListOne.next;
    curListTwo = curListTwo.next;
  }

  while(curListOne) {
    sum += curListOne.value * Math.pow(10, tens);
    curListOne = curListOne.next;
    tens++;
  }

  while(curListTwo) {
    sum += curListTwo.value * Math.pow(10, tens);
    curListTwo = curListTwo.next;
    tens++;
  }
  return makeList(sum);
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


// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
