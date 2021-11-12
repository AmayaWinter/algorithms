// //https://leetcode.com/problems/peeking-iterator/
//
// function Node(value, next = null, prev = null) {
//   this.value = value;
//   this.next = next
//   this.prev = prev;
// }
//
// function Queue() {
//   this.head = null;
//   this.tail = null;
//   this.length = 0;
// }
//
// Queue.prototype.enqueue = function(value) {
//   let newNode = new Node(value);
//   if(this.length === 0) {
//     this.head = newNode;
//     this.tail = newNode;
//     this.head.next = newNode;
//     this.head.prev = newNode;
//     this.length++;
//   }
//   else if(this.length === 1) {
//     this.tail = newNode;
//     this.tail.prev = this.head;
//     this.head.prev = null;
//     this.head.next = newNode;
//     this.length++;
//   }
//   else {
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//   }
// }
//
// Queue.prototype.dequeue = function () {
//   let value;
//   if(this.length === 1) {
//     value = this.head.value
//     this.head = null;
//     this.tail = null;
//     this.length--;
//   }
//   else if(this.length === 2) {
//     value = this.tail.value;
//     this.head.next = this.head;
//     this.head.prev = this.head;
//     this.tail = this.head;
//     this.length--;
//   }
//   else {
//     value = this.tail.value;
//     this.tail = this.tail.prev;
//     this.tail.next = null;
//     this.length--;
//   }
//   return value;
// }
//
// Queue.prototype.peek = function() {
//   if(this.tail){
//     return this.tail.value;
//   }
// }
//
// Queue.prototype.print = function() {
//   let start = this.head;
//   while(start !== null) {
//     console.log(start);
//     start = start.next;
//   }
// }
//
// let temp = new Queue();
// temp.enqueue(1);
// temp.enqueue(2);
// temp.enqueue(3);
// temp.dequeue();
// temp.dequeue();
// temp.enqueue(2);
// console.log(temp);
// debugger;
// // temp.print();

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  this.iterator = iterator;
  this.queue = [];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  if(this.queue.length) {
    return this.queue[0];
  }
  else if(this.iterator.hasNext()) {
    let value = this.iterator.next();
    this.queue.push(value);
    return value;
  }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  if(this.queue.length) {
    return this.queue.shift();
  }
  else {
    return this.iterator.next();
  }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  if(this.queue.length || this.iterator.hasNext()) return true;
  return false;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */